import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController, private loadingController: LoadingController) {}
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  /*async mdlEgn(){
    this.presentLoadingWithOptions()
    const modal = await this.modalController.create({
      component: EnginePage
    });
    return modal.present();
  }
  async mdlSc2(){
    const modal = await this.modalController.create({
      component: Secao2Page
    });
    return modal.present();
  }
  async mdlSc3(){
    const modal = await this.modalController.create({
      component: Secao3Page
    });
    return modal.present();
  }
  async mdlSc4(){
    const modal = await this.modalController.create({
      component: Secao4Page
    });
    return modal.present();
  }*/
  
}
