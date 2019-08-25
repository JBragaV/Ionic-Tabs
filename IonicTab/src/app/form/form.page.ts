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
  
  private profissionais: profissional[]
  
  private novoProfissional: boolean = false
   

  constructor(private alertController: AlertController,
    private formBilder: FormBuilder,
    private profissionalService: ProfissionalService,
    private arota: Router) { }
    
  proForm: FormGroup
  ngOnInit():void {
    this.proForm =this.formBilder.group({
      nome:["", [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
      email:["", [Validators.required, Validators.email, Validators.maxLength(40)]],
      endereco:["", [Validators.required, Validators.maxLength(100)]],
      password:["", Validators.compose([
        Validators.minLength(4), 
        Validators.maxLength(20), 
        Validators.required
      ])]
      //servicos:["", Validators.required]
    })
    this.pegarTodos()
   
  }
  pegarTodos(){
    this.profissionalService.getAllProf().subscribe(
        profDB => this.profissionais = profDB,
        Erro => console.log(Erro)
        )
  }
  
  deletar(id: string){
    this.profissionalService.delete(id).subscribe(() =>{
      this.arota.navigateByUrl("tabs/form"), 
      error =>{
        console.log(error)
      }    
    }
  )
    alert("Ele foi pra casa do ... papai!!!")
    window.location.reload()
  }

//Variável de teste.
msgNome = "";
msgEmail = "";
msgEndereco = "";
msgPass = "";
msgServicos = "";
errorNome = false;
errorEmail = false;
errorEndereco = false;
errorPass = false;
erroServicos = false;

  logar(){  
    let {nome, email, endereco, password} = this.proForm.controls;
    if(!this.proForm.valid){
      if(!nome.valid){
        this.errorNome = true;
        this.msgNome = "Insira um nome no campo acima!"
      }else{
        this.msgNome = "";
      }
      if(!email.valid){
        this.errorEmail = true;
        this.msgEmail = "Insira um e-mail válido no campo acima!"
      }else{
        this.msgEmail = ""
      }
      if(!endereco.valid){
        this.errorEndereco = true;
        this.msgEndereco = "Insira um endereço no campo acima!"
      }else{
        this.msgEndereco = "";
      }
      if(!password.valid){
        this.errorPass = true;
        this.msgPass = "Insira uma senha entre 4 e 20 caracteres!"
      }else{
        this.errorPass = false;
        this.msgPass = "";
      }
      /*if(!Servicos.valid){
        this.erroServicos = true;
        this.msgServicos = "Selecione pelo menos um serviço!!!"
      }else{
        this.erroServicos = false;
        this.msgServicos = "";
      }*/
    }else{
      this.add();
    }
  }
  async add(){
   //console.log("entrei aqui no add")
   const novoProfissional = this.proForm.getRawValue() as profissional
   console.log(novoProfissional)
   this.profissionalService.AddProf(novoProfissional).subscribe(() =>
     window.location.reload(), 
     error =>{
       console.log(error),
       this.proForm.reset() 
   })
   await this.proForm.reset();
   this.novoProfissional = false
  }

  goForward(){
    this.novoProfissional = true;
  }
}
