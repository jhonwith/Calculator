import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
 @Input() numero1 = 10;
 @Input() numero2=10;
 @Input() result=this.numero1+this.numero2;
  constructor() {
  console.log(this.result);
}
  ngOnInit(): void {

  }
  calculator(){
    if(this.numero1+this.numero2){
      console.log(this.result);
    }
  }
}
