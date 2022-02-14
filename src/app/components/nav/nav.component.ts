import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  query: string = '';
@Output() mode:string="light"
  constructor(private router: Router ) {}

  ngOnInit(): void {}
  setRegion(event: any) {
    this.router.navigate([`region/${event.target.value}`]);
  }
  setQuery(event: any) {
    this.query = event.target.value;
  }

  onSubmit() {
    console.log(this.query);
    this.router.navigate([`name/${this.query}`]);
  }

}
