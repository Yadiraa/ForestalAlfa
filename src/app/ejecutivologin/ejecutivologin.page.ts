import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ejecutivologin',
  templateUrl: './ejecutivologin.page.html',
  styleUrls: ['./ejecutivologin.page.scss'],
})
export class EjecutivologinPage implements OnInit {
contra = '';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  acceder() {
      if ( this.contra === 'madera' ) {
        alert('Bienvenido');
        this.navCtrl.navigateForward('/pedidomadera');
      }
      if ( this.contra === 'triplay' ) {
        alert('Bienvenido');
        this.navCtrl.navigateForward('/pedidos');
      }
      if ( this.contra === 'muebles' ) {
        alert('Bienvenido');
        this.navCtrl.navigateForward('/pedidomuebles');
      }
    }

}
