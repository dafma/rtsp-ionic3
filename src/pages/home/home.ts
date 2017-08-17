import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  SPlay(){
    cordova.plugins.rtspVideo.play('rtsp://mpv.cdn3.bigCDN.com:554/bigCDN/definst/mp4:bigbuckbunnyiphone_400.mp4', function () {
      console.log('Done Playing.');
  }, function (e) {
      console.error('Error: ' + e);
  });
  }

}
