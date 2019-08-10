import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.page.html',
  styleUrls: ['./engine.page.scss'],
})
export class EnginePage implements OnInit {

  dimensoes = ["Envergadura", "Altura", "Comprimento"]
  comprimentos = ["11,85m", "3,00m", "8,70m"]
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  fecharMdl(){
    this.modalController.dismiss()
  }
}
