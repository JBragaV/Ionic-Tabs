import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
})
export class PesoPage implements OnInit {
  
  @Input() minReq // Feito Mínimo requerido
  @Input() PesDispTot //Feito Peso Disponível Total
  @Input() combMin //Feito Combustível m
  @Input() totBord //Feito
  @Input() pesTripuPax
  @Input() combMinp //Feito  Payload Máximo
  @Input() pesZerComb //Feito
  @Input() pesComb
  @Input() pad
  @Input() combEtap
  @Input() pap
  
  //pesoMaior = false
  constructor() { }

  ngOnInit() {
    
  }
  //Valor = Peso máximo de decolagem, Valor2 = peso vazio básico, valor3 = combustível mínimo valor4 = peso tripulação e passageiros
  conc(valor: string, valor2: string, valor3: string, valor4: string){
    let teAcalma = Number(valor.replace(",", ".")) - Number(valor2.replace(",", "."))
    this.PesDispTot = teAcalma.toFixed(2)
    this.combMinp = (teAcalma - Number(valor3.replace(",", ".")) - Number(valor4.replace(",", "."))).toFixed(2)
    
    //console.log(`Esse é o valor 3 = ${valor3}`)
    //console.log(`Esse é o valor 4 = ${valor4}`)
    /*if(teAcalma > 1905){
      let txt = document.getElementById("endereco")
      txt.style.color = "red"
      this.PesDispTot = teAcalma.toString()}*/
  }
  vml(pe: string, pa: string, pr: string, pAdc: string){
    this.minReq = Number(pe.replace(",", "."))+Number(pa.replace(",", "."))+Number(pr.replace(",", "."))
    this.totBord = this.minReq + Number(pAdc.replace(",", "."))
    this.combMin = (this.minReq * 0.72).toFixed(2)
  }

  bal(pbv: string, pd: string, pc: string, pt: string, bd: string, btr: string, etapa: string){
    this.pesZerComb = Number(pbv.replace(",", ".")) + Number(pd.replace(",", ".")) + Number(pc.replace(",", ".")) + Number(pt.replace(",", ".")) 
                    + Number(bd.replace(",", ".")) + Number(btr.replace(",", "."))
    this.pesComb = (this.totBord * 0.72).toFixed(2)
    this.pad = Number(this.pesZerComb) + Number(this.pesComb)
    this.combEtap = (Number(etapa.replace(",", ".")) * 0.72).toFixed(2)
    this.pap = (this.pad - this.combEtap).toFixed(2)
    //iniciar os calculos do centro de gravidade
    //Iniciar as "analises dos valores. Centro de gravidade e peso"
  }
  limpa(){
    console.log("Vou limpar depois isso!!!")
  }

  
}
