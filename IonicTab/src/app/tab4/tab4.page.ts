import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { cliente } from '../models/cliente.models';


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

  constructor(private formBilder:FormBuilder, 
              private clienteService: ClienteService,
              private arota: Router
    ) { }

  ngOnInit():void {
    this.formulario =this.formBilder.group({
      nome:["o", [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
      email:["i", [Validators.required, Validators.email, Validators.maxLength(40)]],
      endereco:["p", [Validators.required, Validators.maxLength(100)]],
      password:["m", Validators.compose([
          Validators.minLength(4), 
          Validators.maxLength(20), 
          Validators.required
        ])]
    }, {updateOn: 'blur'})
  }
  
  add(){
    //enviar para os serviços.
    /*Resgatando os valores dos campos e fazendo i, cast(conversão)para o modelo)template Cliente*/
    const novoCliente = this.formulario.getRawValue() as cliente;

    this.clienteService.addCliente(novoCliente).subscribe(() => this.arota.navigateByUrl("ainda não sei"),
                                  error => {
                                    console.log(error);
                                    this.formulario.reset();
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
      this.add();
    }
  }
}
