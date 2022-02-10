import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { 
  }
  check(){
    return this.Http.get("https://restcountries.com/v3.1/all");
  }
  getRegion(value: string){
    return this.Http.get(`https://restcountries.com/v3.1/region/${value}`);
  }
  getSearch(name: string){
    return this.Http.get(`https://restcountries.com/v3.1/name/${name}`);
  }
  getSubregion(name: string){
    return this.Http.get(`https://restcountries.com/v3.1/subregion/${name}`);
  }
}
