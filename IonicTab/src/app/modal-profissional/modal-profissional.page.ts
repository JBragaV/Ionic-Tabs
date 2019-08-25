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
  public profissional: profissional[]
  constructor(private formBilder: FormBuilder, private profissionalService: ProfissionalService) { }

  pegaProfissional(id:string){
    this.profissionalService.getProfissional(id).subscribe(() =>
          prof => this.profissional = prof,
          error => console.log(error))
  }
  ngOnInit() {
    //this.profissional = this.pegaProfissional(this.id)
    //console.log(teste)
    let nome = "Jocimar"
    this.proForm =this.formBilder.group({
      nome:[`${nome}`, [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
      email:[`${nome}`, [Validators.required, Validators.email, Validators.maxLength(40)]],
      endereco:[`${nome}`, [Validators.required, Validators.maxLength(100)]],
      password:[`${nome}`, Validators.compose([
        Validators.minLength(4), 
        Validators.maxLength(20), 
        Validators.required
      ])]
      //servicos:["", Validators.required]
    })
  }

}
