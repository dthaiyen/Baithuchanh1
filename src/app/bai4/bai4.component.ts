import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let catten = (s) => {
      let n = s.lastIndexOf(' ');
      return s.substr(n + 1) + ' ' + s.substr(0, n);
    }
    let s = [{ hoten: 'Nguyen Van Anh', dthi: 9.5 },
    { hoten: 'Tran Thi Mai', dthi: 10.5 },
    { hoten: 'Hoan Anh Dung', dthi: 5.5 }
    ].sort((a, b) => {
      if (catten(a.hoten) > catten(b.hoten)) return 1;
      else if (catten(a.hoten) < catten(b.hoten)) return -1;
      return 0;
    });
    console.log(s);
  }

}
