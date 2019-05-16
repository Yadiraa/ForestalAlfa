import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskMuebles} from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import {ActivatedRoute } from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
declare var window: any;
@Component({
  selector: 'app-addmuebles',
  templateUrl: './addmuebles.page.html',
  styleUrls: ['./addmuebles.page.scss'],
})
export class AddmueblesPage implements OnInit {

    @ViewChild('nombre1') nombre2;
    @ViewChild('largo1') largo2;
    @ViewChild('ancho1') ancho2;
    @ViewChild('altura1') altura2;
    @ViewChild('descripcion1') descripcion2;

  todoM: TaskMuebles = {
    imagen: '',
    nombre: '',
    largo: '',
    ancho: '',
    altura: '',
    descripcion: ''
  };
  todoIdT = null;
  todoId = null;
  tempImages: string [] = [];
  constructor(private router: ActivatedRoute, public loadingController: LoadingController,
    private nav: NavController, private todoService: TodoService, private camera: Camera) { }
    validarCampos() {
      // tslint:disable-next-line:max-line-length
      if (this.nombre2.value === '' || this.largo2.value === ''  || this.ancho2.value === '' || this.altura2.value === '' || this.descripcion2.value === '' ) {
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
    this.todoService.getTodoMuebles(this.todoIdT).subscribe(res => {
      loading.dismiss();
      this.todoM = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando..'
    });
    await loading.present();
    if (this.todoIdT) {
      // update
      this.todoService.updateTodoMuebles(this.todoM, this.todoIdT).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/muebles');
      });
    } else {
// add new
this.todoService.addTodoMuebles(this.todoM).then(() => {
  loading.dismiss();
  this.nav.navigateForward('/muebles');
    });
  }
}

onRemove(idTodo: string) {
this.todoService.removeTodoMuebles(idTodo);
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
  this.todoService.uploadImage(options);

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
  this.todoService.uploadImage(options);
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


