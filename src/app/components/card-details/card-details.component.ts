import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/srvices/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  countryData :any[] =[]
  name :string = ""
  listSubregion : any[] =[];
  @Input() item:any;
  constructor(private Api: ApiService, private route: ActivatedRoute) { 
      this.route.paramMap.subscribe(params => {
            this.name = params.get('name') || ''
          if (this.name){
              this.Api.getSearch(this.name).subscribe((data:any) => {
                this.countryData = data;
                console.log(data);
                this.Api.getSubregion(data[0].subregion).subscribe((data:any) => {
                  this.listSubregion = data?.filter((element:any) => element.name.common != this.name && element.name.common != 'Israel');
                  console.log(data);
                  
                });
              });
            }

          
      })
     
  }

  ngOnInit(): void {
  }

}
