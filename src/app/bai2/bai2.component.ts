import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }
  x:any;
  n:any;
  S=1;
  ngOnInit(): void {
    for(let i=1;i<Number.parseInt(this.n);i++){
      this.S+=Math.pow(-1,Number.parseInt(this.n))
    }
  }

}
