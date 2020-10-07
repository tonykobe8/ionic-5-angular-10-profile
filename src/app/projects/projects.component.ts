import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public number1;
public number2;
public sum;
constructor() { }



  ngOnInit() {
  }
  
addNumber(va){
  this.number1;
  this.number2;
let sum = this.number1 + this.number2 ;
console.log(sum);
}

}