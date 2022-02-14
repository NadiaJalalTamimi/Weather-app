import { ApiService } from './../../srvices/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  countryData: any = [];
  region:string = "";
  name:any = "";
  @Input() mode:any;
  constructor(private Api: ApiService, private route: ActivatedRoute) {
 this.route.paramMap.subscribe(params => {
       this.region = params.get('region') || ''
       this.name = params.get('name') || ''
       if(this.region){
         this.Api.getRegion(this.region).subscribe((data: any) => {
           this.countryData = data;
         } );
       }else if (this.name){
         this.Api.getSearch(this.name).subscribe((data:any) => {
           this.countryData = data;
         });
       }
       else {
         this.Api.check().subscribe(
           (data: any) => {
             this.countryData = data;
           },
           () => {
             console.log('api error');
           }
         );
       }
 })

  }

  ngOnInit(): void {
   
  }
}
