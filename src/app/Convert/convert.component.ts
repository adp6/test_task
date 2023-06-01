import { Component, Input, ViewEncapsulation } from "@angular/core";
@Component({
    selector:'app-convert',
    templateUrl:'./convert.component.html',
    styleUrls:['./convert.component.scss'],
    encapsulation:ViewEncapsulation.None
})

export class ConvertComponent {
    @Input() usd:number = 0
    @Input() eur:number = 0

    firstVal:number = 0;
    secondVal:number = 0;
    select1 = 'USD'
    select2 = 'EUR'

   
    convertSecond(){
        let v = 0
        if(this.select1==='USD'){
            v = this.firstVal*this.usd
        }
        else if(this.select1==='EUR'){
            v = this.firstVal*this.eur
        }
        else{
            v = this.firstVal
        }
        switch(this.select2){
            case "USD":
                this.secondVal = v / this.usd
                break;
            case "EUR":
                this.secondVal  = v / this.eur
                break;
            case "HRN":
                this.secondVal = v
                break;
        }
        this.secondVal = parseFloat(this.secondVal.toFixed(3))
    }
    convertFirst(){
        let v = 0
        if(this.select2==='USD'){
            v = this.secondVal*this.usd
        }
        else if(this.select2==='EUR'){
            v = this.secondVal*this.eur
        }
        else{
            v = this.secondVal
        }
        switch(this.select1){
            case "USD":
                this.firstVal = v / this.usd
                break;
            case "EUR":
                this.firstVal  = v / this.eur
                break;
            case "HRN":
                this.firstVal = v
                break;
        }
        this.firstVal = parseFloat(this.firstVal.toFixed(3))
    }
}