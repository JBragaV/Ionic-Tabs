import { Component, OnInit } from '@angular/core';
import { cliente } from '../models/cliente.models';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {
  
  
  
  constructor(private formBilder:FormBuilder, 
    private clienteService: ClienteService,
    private arota: Router,
    private nav: NavController) { }

  ngOnInit() {
    
  }

  
  goBack(){
    this.nav.navigateBack("/tabs/tab4")
  }
}
