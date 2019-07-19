import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  teste;
  constructor() { }

  ngOnInit() {
  }

  aeiou(){
    alert("Olha aí o que eu digitei: "+this.teste)
  }
}
