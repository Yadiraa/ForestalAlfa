import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TaskI } from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import {ActivatedRoute } from '@angular/router';
import {NavController, LoadingController, ToastController} from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'Firebase';

declare var window: any;


@Component({
  selector: 'app-addmadera',
  templateUrl: './addmadera.page.html',
  styleUrls: ['./addmadera.page.scss'],
})
export class AddmaderaPage implements OnInit {
  nombre: any;
  grueso: any;
  ancho: any;
  largo: any;
  clase: any;
  bulto: any;

  @ViewChild('nombre1') nombre2;
  @ViewChild('grueso1') grueso2;
  @ViewChild('ancho1') ancho2;
  @ViewChild('largo1') largo2;
  @ViewChild('clase1') clase2;
  @ViewChild('bulto1') bulto2;
todo: TaskI = {
  nombre: '',
  grueso: '',
  ancho: '',
  largo: '',
  clase: '',
  bulto: '',
};
todoId = null;
tempImages: string [] = [];
  constructor( private webview: WebView, private camera: Camera,
    private router: ActivatedRoute, public loadingController: LoadingController, private nav: NavController,
    private todoService: TodoService,  public toastController: ToastController, private imagePicker: ImagePicker) {
  }
  validarCampos() {
    // tslint:disable-next-line:max-line-length
    if (this.nombre2.value === '' || this.grueso2.value === ''  || this.ancho2.value === '' || this.largo2.value === '' || this.clase2.value === '' || this.bulto2.value === '') {
      alert('Ingrese todos los datos');
    } else {
     this.saveTodo();
    }
   }
  ngOnInit() {
    this.todoId = this.router.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    if (this.todoId) {
      // update
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/madera');
      });
    } else {
// add new
this.todoService.addTodo(this.todo).then(() => {
  loading.dismiss();
  this.nav.navigateForward('/madera');
    });
  }
}

onRemove(idTodo: string) {
this.todoService.removeTodo(idTodo);
}

async openImagePicker() {
  this.imagePicker.hasReadPermission()
  .then((result) => {
    if (result === false) {
      // no callbacks required as this opens a popup which return
     this.imagePicker.requestReadPermission();
    } else if (result === true) {
      this.imagePicker.getPictures({
        maximumImagesCount: 1
      })
      .then((results) => {
        for (let i = 0; i < results.length; i++) {
          this.uploadImageToFirebase(results[i]);
        }
      }, (err) => console.log(err));
    }
  }, (err) => {
    console.log(err);
  });
}
async uploadImageToFirebase(image) {
  image = this.webview.convertFileSrc(image);
  // uploads img to firebase storage
  this.todoService.uploadImage(image)
  .then(async photoURL => {
    const toast = await this.toastController.create({
      message: 'Image was updated successfully',
      duration: 3000
    });
  toast.present();
  });
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
  this.procesarImagen1( options);
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
  this.procesarImagen1( options);
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
procesarImagen1( options: CameraOptions) {
  this.camera.getPicture(options).then((imageData) => {
    const img = this.webview.convertFileSrc( imageData );
    this.todoService.uploadImage(imageData)
    .then(async photoURL => {
      const toast = await this.toastController.create({
        message: 'Image was updated successfully',
        duration: 3000
      });
    toast.present();
    });
    console.log(img);
    this.tempImages.push(img);
     }, (err) => {
      // Handle error
     });
  }
takeSelfie(): void {
  this.camera.getPicture({
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.CAMERA,
    saveToPhotoAlbum: true
  }).then(profilePicture => {
    // Send the picture to Firebase Storage
    const selfieRef = firebase.storage().ref('profilePictures/user1/profilePicture.png');
    selfieRef
      .putString(profilePicture, 'base64', {contentType: 'image/png'})
      .then(savedProfilePicture => {
        firebase
          .database()
          .ref(`users/user1/profilePicture`)
          .set(savedProfilePicture.downloadURL);
      });
  });
}
}
