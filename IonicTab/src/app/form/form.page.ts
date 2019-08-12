import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async apareceae(){
    const alert = await this.alertController.create({
      header: "Alerta",
      subHeader: "Sub título da bagaça",
      message: "Esse alerta é um teste. Será que stou aprendendo mais IONIC!?",
      buttons: ["OK"]
    })
    alert.present();
  }
}
