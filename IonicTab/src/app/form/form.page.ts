import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfissionalService } from '../service/profissional.service';
import { Router } from '@angular/router';
import { profissional } from '../models/profissional.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  proForm: FormGroup

  constructor(private alertController: AlertController,
              private formBilder: FormBuilder,
              private profissionalService: ProfissionalService,
              private arota: Router) { }

  ngOnInit() {
    this.proForm =this.formBilder.group({
      nome:["", [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
      email:["", [Validators.required, Validators.email, Validators.maxLength(40)]],
      endereco:["", [Validators.required, Validators.maxLength(100)]],
      password:["", Validators.compose([
          Validators.minLength(4), 
          Validators.maxLength(20), 
          Validators.required
        ])],
        data:["", Validators.required]
    })
   
  }

  add(){
    const novoProfissional = this.proForm.getRawValue() as profissional
    console.log(novoProfissional)
    this.profissionalService.AddProf(novoProfissional).subscribe(() =>{
      this.arota.navigateByUrl("ainda não sei de novo"), 
      error =>{
        console.log(error),
        this.proForm.reset()
      }
      
    }
    )
  }

  async apareceae(){
    var dt = new Date()
    var hora = dt.getHours()
    console.log(hora)
    const alert = await this.alertController.create({
      header: "Alerta",
      subHeader: "Sub título da bagaça",
      message: "Ok",
      buttons: ["OK"]
    })
    alert.present();
  }
}
