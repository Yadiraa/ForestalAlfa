import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor( private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

  validations_form: FormGroup;
  errorMessage = '';
    validation_messages = {
      'email': [
        { type: 'required',
         message: 'Email es requerido.'},
        { type: 'pattern',
         message: ' Por favor introduzca un email válido.' }
      ],
      'password': [
        { type: 'required', message: ' Password es requerido.' },
        { type: 'minlength', message: ' El password debe tener al menos 6 caracteres.' }
      ]
    };

    ngOnInit() {
      this.validations_form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required
        ])), }); }
    loginUser(value) {
      this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/vistacategoria');
      }, err => {
        this.errorMessage = err.message;
      }); }
    goToRegisterPage() {
      this.navCtrl.navigateForward('/register');
    } }
