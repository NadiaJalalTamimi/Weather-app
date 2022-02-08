import { ApiService } from './../../srvices/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  countryData: any = [];
  constructor(private Api: ApiService) {
    this.Api.check().subscribe(
      (data: any) => {
        this.countryData = data;
        console.log(this.countryData);
        
      },
      () => {
        console.log('api error');
      }
    );
  }

  ngOnInit(): void {}
}
