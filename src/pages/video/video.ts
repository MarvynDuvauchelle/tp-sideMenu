import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  video: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaCapture: MediaCapture) {
  }

  optionsVideo: CaptureImageOptions = { limit: 3 };

 runVideo() {
    this.mediaCapture.captureImage(this.optionsVideo)
      .then(
      (data: MediaFile[]) => this.video = data[0].fullPath,
      (err: CaptureError) => console.error(err)
      );
  }

}
