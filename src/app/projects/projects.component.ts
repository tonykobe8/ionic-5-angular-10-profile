import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
FirstNumber:string;
SecondNumber:string;
sum:number;
constructor() { }



  ngOnInit() {
  }
  
addNumber(){
  this.sum = parseInt(this.FirstNumber) + parseInt(this.SecondNumber);
console.log(this.sum)
}
MinusNumber(){
  this.sum = parseInt(this.FirstNumber) - parseInt(this.SecondNumber);
console.log(this.sum)
}
divideNumber(){
  this.sum = parseInt(this.FirstNumber) / parseInt(this.SecondNumber);
console.log(this.sum)
}

MultyNumber(){
  this.sum = parseInt(this.FirstNumber) * parseInt(this.SecondNumber);
console.log(this.sum)
}

}