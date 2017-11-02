/*
Auteur : Marvyn Duvauchelle
Titre : Fichier controller de la caméra
Description : Permet de lancer la caméra du télépone et d'enregistrer les photos prises dans la galerie du téléphone.
*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Importation du plugin camera */
import { Camera, CameraOptions } from '@ionic-native/camera';
/* Importation du plugin base64-to-gallery */
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

import { LocalNotifications } from '@ionic-native/local-notifications';

/* Liste des components */
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})

export class CameraPage {

/* Déclaration d'une variable base64 */
    base64Image:String;

/* Déclaration du constructeur, avec en paramètre nos plugins */
  constructor(public navCtrl: NavController, private camera: Camera, private base64ToGallery: Base64ToGallery, private localNotifications: LocalNotifications) {
  }

/* Options pour la caméra */
 options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}


/* Fonction permettant de lancer la caméra */
runCamera() {
  this.camera.getPicture(this.options).then((imageData) => {
    /* Si la photo a été prise et si elle est encodée en base64 */
    /* On la stock dans notre variable base64Image */
  this.base64Image = 'data:image/jpeg;base64,' + imageData;

  /* On utilise la fonction saveInGallery afin d'enregistrer l'image prise dans la galerie du téléphone */
  this.saveInGallery(imageData);
  this.localNotifications.schedule({
    id: 1,
    text: 'La notification',
    data: { secret: "coucou" }
  });

}, (err) => {
    /* Si il y a un soucis, on retourne l'erreur */
  });
} 

/* Fonction permettant de sauvegarder une photo dans la galerie d'un téléphone */
/* Param : base64Data -> Image encodée en base64 */
saveInGallery(base64Data) {
    this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
        /* Si la photo est bien enregistrée, on affiche un message de succes dans la console */
    res => console.log('Saved image to gallery ', res),
    /* Si la photo n'est pas enregistrée, on affiche un message d'echec dans la console */
    err => console.log('Error saving image to gallery ', err)
    );
}




}


