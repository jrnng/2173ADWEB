import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'This string is interpolated';
clientName = 'Jaira';
appliedCSS = 'brown';
notAppliedCSS = false;
myColor = 'teal';

//EVENT BINDING
showData($event: any){
console.log('Button is clicked: ');
if($event){
console.log($event.target);
console.log($event.target.value);
}
}
//Click Count
clickCount=0
clickMe(){
this.clickCount++;
}

}