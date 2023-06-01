import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testTask';
  url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

    constructor(private http: HttpClient){}
    
    usd:number = 0;
    eur:number = 0;

    ngOnInit(){
        this.http.get(this.url).subscribe({next:(data:any)=>{
            this.usd = 2
            for(let v of data){
                if(v.cc==='USD'){
                    this.usd = Math.ceil(v.rate)
                }
                else if(v.cc==='EUR'){
                    this.eur = Math.ceil(v.rate)
                }
            }
        }})
    }
}
