import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';
  validation_messages = {
   'email': [
     { type: 'required', message: 'Email es requerido.' },
     { type: 'pattern', message: 'Introduzca email válido.' }
   ],
   'password': [
     { type: 'required', message: 'Se requiere password.' },
     { type: 'minlength', message: 'El password debe tener al menos 6 caracteres.' }
   ]
 };

  constructor( private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder) { }
    ngOnInit() {
      this.validations_form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])),
      });
    }

    tryRegister(value) {
      this.authService.registerUser(value)
       .then(res => {
         console.log(res);
         this.errorMessage = '';
         this.successMessage = 'Tu cuenta ha sido creada. Por favor Iniciar sesión.';
       }, err => {
         console.log(err);
         this.errorMessage = err.message;
         this.successMessage = '';
       });
    }
    goLoginPage() {
      this.navCtrl.navigateBack('');
    }
  }
