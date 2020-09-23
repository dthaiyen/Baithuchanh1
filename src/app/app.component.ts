import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  ngOnInit(){
    //bai mẫu 1
    let n = 10;
    let s = 0;    
    for(let i=1;i<=n;++i){    
    s += 1.0/i;    
    }   
    console.log(s);
    // bài mẫu 2
    var list:number[];
    list = [4,11,45,3,13,50,7,60,77];
      var checkNT = (n:number) => {
        let ok = true;
        for(let i=2;i<n;++i){
          if(n%i==0){
            ok=false;
            break;
          }
        }
        return ok;
      }
      let listNT = list.filter(x=>checkNT(x));
      console.log("Các số nguyên tố là : " + listNT );
    }
  }
      //bài mẫu 3
      export class HCN {
        protected a:number;  
        protected b:number;   
        constructor(a:number,b:number){   
        this.a=a;    
        this.b=b;  
        }    
        public DienTich():number {    
        return this.a*this.b;    
        }      
        }      
        export class HH extends HCN {       
        protected h:number;    
        constructor(a:number,b:number, h: number){     
        super(a,b);      
        this.h = h;      
        }       
        public TheTich():number {      
        return this.DienTich()*this.h;      
        }      
        }      
        var a: number = 2;      
        var b: number = 2;      
        var h: number = 2;     
        var hh = new HH(a,b,h);        
        console.log(hh.TheTich())
        //bai 1 tự làm
        

