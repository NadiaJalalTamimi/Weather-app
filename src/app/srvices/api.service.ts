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
}
