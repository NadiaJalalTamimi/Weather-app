import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
query:string =""
  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    
  }
  setRigon(event:any){
    console.log(event.target.value)
  }
  setQuery(event:any){
    this.query=event.target.value;
  }
  onSubmit(event:any){
    event.preventDefault();
    console.log(this.query)
  }
}
