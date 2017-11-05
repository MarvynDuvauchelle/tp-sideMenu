import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*
Auteur : Marvyn Duvauchelle
Titre : Fichier controller de la caméra vidéo
Description : Permet de lancer la caméra vidéo du télépone et d'enregistrer les vidéos prises dans la galerie du téléphone.
*/

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  /* Déclaration d'une variable video */
  video: any;

  /* Déclaration du constructeur, avec en paramètre nos plugins */
  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaCapture: MediaCapture) {
  }

  /* Options pour la caméra vidéo */
  optionsVideo: CaptureImageOptions = { limit: 3 };

/* Fonction permettant d'enregistrer une vidéo et de la stocker dans la variable video */
  runVideo() {
    this.mediaCapture.captureImage(this.optionsVideo)
      .then(
      (data: MediaFile[]) => this.video = data[0].fullPath,
      (err: CaptureError) => console.error(err)
      );
  }

}
