import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TaskTriplay} from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import {ActivatedRoute } from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
declare var window: any;
@Component({
  selector: 'app-addtriplay',
  templateUrl: './addtriplay.page.html',
  styleUrls: ['./addtriplay.page.scss'],
})
export class AddtriplayPage implements OnInit {

  nombre: any;
  dimension: any;
  espesor: any;
  especie: any;
  calidad: any;
  bulto: any;

  @ViewChild('nombre1') nombre2;
  @ViewChild('dimension1') dimension2;
  @ViewChild('especie1') especie2;
  @ViewChild('espesor1') espesor2;
  @ViewChild('calidad1') calidad2;
  @ViewChild('bulto1') bulto2;
  todoT: TaskTriplay = {
    nombre: '',
    dimension: '',
    espesor: '',
    especie: '',
    calidad: '',
    bulto: ''
  };
  todoIdT = null;
  todoId = null;
tempImages: string [] = [];
  constructor(private router: ActivatedRoute, public loadingController: LoadingController, private nav: NavController,
    private todoService: TodoService, private camera: Camera) { }
    validarCampos() {
      // tslint:disable-next-line:max-line-length
      if (this.nombre2.value === '' || this.dimension2.value === ''  || this.espesor2.value === '' || this.especie2.value === '' || this.calidad2.value === '' || this.bulto2.value === '') {
        alert('Ingrese todos los datos');
      } else {
       this.saveTodo();
      }
     }
  ngOnInit() {
    this.todoIdT = this.router.snapshot.params['id'];
    if (this.todoIdT) {
      this.loadTodot();
    }
  }
  async loadTodot() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.todoService.getTodoTriplay(this.todoIdT).subscribe(res => {
      loading.dismiss();
      this.todoT = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    if (this.todoIdT) {
      // update
      this.todoService.updateTodoTriplay(this.todoT, this.todoIdT).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/triplay');
      });
    } else {
// add new
this.todoService.addTodoTriplay(this.todoT).then(() => {
  loading.dismiss();
  this.nav.navigateForward('/triplay');
    });
  }
}

onRemove(idTodo: string) {
this.todoService.removeTodoTriplay(idTodo);
}

camara() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.CAMERA,
    saveToPhotoAlbum: true
  };
  this.procesarImagen( options);
}
libreria() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  this.procesarImagen( options);
}
procesarImagen( options: CameraOptions) {
this.camera.getPicture(options).then((imageData) => {
  const img = window.Ionic.WebView.convertFileSrc( imageData );
  console.log(img);
  this.tempImages.push(img);
   }, (err) => {
    // Handle error
   });
}
}
