import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public formulario:any;
  msgNome = "";
  msgEmail = "";
  msgEndereco = "";
  msgPass = "";
  errorNome = false;
  errorEmail = false;
  errorEndereco = false;
  errorPass = false;

  constructor(private formBilder:FormBuilder) { }

  ngOnInit():void {
    this.formulario =this.formBilder.group({
      "nome":["", Validators.required],
      "email":["", [Validators.required]],
      "endereco":["", Validators.required],
      "password":["", Validators.compose([
          Validators.minLength(4), 
          Validators.maxLength(20), 
          Validators.required
        ])]
    })
  }

  logar(){
    console.log(this.formulario.value)
    let {nome, email, endereco, password} = this.formulario.controls;
    if(!this.formulario.valid){
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
      }
    }else{
      alert("Os dados seram enviados para o banco de dados!!!")
    }
  }
}
