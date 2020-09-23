import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }
  title='bai1';
  //Tính S(n) = x + x^2 + x^3 + … + x^n";
  x:any;
  n:any;
  S=0;
  ngOnInit() {
    for( let i=0;i<=Number.parseInt(this.n);i++){
      this.S+=Math.pow(Number.parseInt(this.x),Number.parseInt(this.n));
    }
  }

}
