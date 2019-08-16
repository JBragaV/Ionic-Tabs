import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
})
export class PesoPage implements OnInit {
  
  @Input() res
  pesoMaior = false
  constructor() { }

  ngOnInit() {
  }
  conc(valor, valor2){
    let teAcalma = Number(valor) + Number(valor2)
    console.log(valor, valor2)
    if(teAcalma > 1905){
      let txt = document.getElementById("endereco")
      txt.style.color = "red"
      this.res = teAcalma.toString() + "Peso superior ao peso maáximo de decolagem!!!"

    }
  }
  limpa(){
    console.log("Vou limpar depois isso!!!")
  }
}
