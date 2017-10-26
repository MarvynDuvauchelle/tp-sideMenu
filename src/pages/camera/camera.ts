import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

    base64Image:String;

  constructor(public navCtrl: NavController, private camera: Camera, private base64ToGallery: Base64ToGallery) {
  }

 options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

runCamera() {
  this.camera.getPicture(this.options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64:
  this.base64Image = 'data:image/jpeg;base64,' + imageData;
  this.saveInGallery(this.base64Image);
  }, (err) => {
  // Handle error
  });
}

saveInGallery(base64Data) {
    this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
    res => console.log('Saved image to gallery ', res),
    err => console.log('Error saving image to gallery ', err)
    );
}




}


