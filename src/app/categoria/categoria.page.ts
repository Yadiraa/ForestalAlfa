import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  contra = '';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  acceder() {
    if (
    this.contra === 'rtw476' || this.contra === 'kfi947' || this.contra === 'fkf207' || this.contra === 'awo275' ||
    this.contra === 'cvn357' || this.contra === 'wpg680' || this.contra === 'fjn120' || this.contra === 'ety456' ||
    this.contra === 'pgk391' || this.contra === 'irg235' || this.contra === 'ohb657' || this.contra === 'kbv469' ||
    this.contra === 'qpi455' || this.contra === 'omw325' || this.contra === 'pow234' || this.contra === 'scq098' ||
    this.contra === 'axq345' || this.contra === 'ewh763' || this.contra === 'oqe084' || this.contra === 'oui941' ||
    this.contra === 'ire537' || this.contra === 'uwi345' || this.contra === 'kaq234' || this.contra === 'zqw456' ||
    this.contra === 'pwd974' || this.contra === 'eot456' || this.contra === 'wcn856' || this.contra === 'aqw109' ||
    this.contra === 'qwi234' || this.contra === 'wdi893' || this.contra === 'wxu134' || this.contra === 'xoi455' ||
    this.contra === 'pso897' || this.contra === 'wqu653' || this.contra === 'kjs093' || this.contra === 'Sai345' ||
    this.contra === 'awe567' || this.contra === 'asf123' || this.contra === 'aso083' || this.contra === 'jhw136' ||
    this.contra === 'gkv456' || this.contra === 'crv894' || this.contra === 'cic689' || this.contra === 'qwo235' ||
    this.contra === 'wqr457' || this.contra === 'awi495' || this.contra === 'cqw985' || this.contra === 'wdk479' ||
    this.contra === 'xmi574' || this.contra === 'uic713' || this.contra === 'wxn143' || this.contra === 'pow355' ||
    this.contra === 'qwi043' || this.contra === 'jks568' || this.contra === 'fsu436' || this.contra === 'oet465' ||
    this.contra === 'rit034' || this.contra === 'paw486' || this.contra === 'pow093' || this.contra === 'pwm093' ||
    this.contra === 'owi345' || this.contra === 'alm923' || this.contra === 'pai054' || this.contra === 'msc093' ||
    this.contra === 'ouy345' || this.contra === 'pow376' || this.contra === 'lkf080' || this.contra === 'zpe398' ||
    this.contra === 'ruo039' || this.contra === 'qow124' || this.contra === 'pwi452' || this.contra === 'pqw034' ||
    this.contra === 'rwq091' || this.contra === 'als298' || this.contra === 'nwf378' || this.contra === 'ksd023' ||
    this.contra === 'ceg203' || this.contra === 'mxq845' || this.contra === 'vfj293' || this.contra === 'rtk250' ||
    this.contra === 'hui203' || this.contra === 'asg992' || this.contra === 'bir230' || this.contra === 'aei010' ||
    this.contra === 'oei346' || this.contra === 'mxl234' || this.contra === 'xzw429' || this.contra === 'hdf530' ||
    this.contra === 'mpd523' || this.contra === 'kla924' || this.contra === 'xrg230' || this.contra === 'kwn454' ||
    this.contra === 'sld363' || this.contra === 'ska235' || this.contra === 'fdp567' || this.contra === 'sdg786' ||
    this.contra === 'spr353' || this.contra === 'ose678' || this.contra === 'erp350' || this.contra === 'vke457' ) {
      alert('Bienvenido');
      this.navCtrl.navigateForward('/vistamuebles');
    } else {
      alert('Codigo incorrecto');
    }

  }
}
