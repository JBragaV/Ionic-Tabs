import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProfissionalService } from '../service/profissional.service';
import { profissional } from '../models/profissional.models';

@Component({
  selector: 'app-modal-profissional',
  templateUrl: './modal-profissional.page.html',
  styleUrls: ['./modal-profissional.page.scss'],
})
export class ModalProfissionalPage implements OnInit {
  id: string = "1"
  proForm: FormGroup
  public profissional: profissional
  constructor(private formBilder: FormBuilder, private profissionalService: ProfissionalService) { }

  async pegaProfissional(id:string){
    this.profissional = await this.profissionalService.getProfissional(id)
  }
  ngOnInit() {
    this.pegaProfissional(this.id)
    this.proForm =this.formBilder.group({
      nome:[`${this.profissional.nome}`, [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
      email:[`${this.profissional.email}`, [Validators.required, Validators.email, Validators.maxLength(40)]],
      endereco:[`${this.profissional.endereco}`, [Validators.required, Validators.maxLength(100)]],
      password:[`${this.profissional.senha}`, Validators.compose([
        Validators.minLength(4), 
        Validators.maxLength(20), 
        Validators.required
      ])]
      //servicos:["", Validators.required]
    })
  }

}
