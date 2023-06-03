import { Component, Input, ViewEncapsulation } from "@angular/core";
@Component({
    selector:'app-convert',
    templateUrl:'./convert.component.html',
    styleUrls:['./convert.component.scss'],
    encapsulation:ViewEncapsulation.None
})

export class ConvertComponent {
    @Input() curency:{[key:string]:number}={}

    values:{[key:string] : number} = {
        'input1':0,
        'input2':0,

    }
    select1 = 'USD'
    select2 = 'HRN'

   
    convert(input:string, convert:string, s1:string,s2:string){
        
        let v = this.values[input] * this.curency[s1]
        this.values[convert] = v/this.curency[s2]
    }
}