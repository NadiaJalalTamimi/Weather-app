import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() item:any;
@Input() mode:any;
  constructor( private router:Router) { 
    
  }

  ngOnInit(): void {

  }
  countryDetails(name:string){
    this.router.navigate([`details/${name}`])
  }

}
