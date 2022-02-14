import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  Baseurl = environment.APIURL;
  
  constructor(private Http: HttpClient) {}
  check() {
    return this.Http.get(this.Baseurl + 'all');
  }
  getRegion(value: string) {
    return this.Http.get(this.Baseurl + `region/${value}`);
  }
  getSearch(name: string) {
    return this.Http.get(this.Baseurl + `name/${name}`);
  }
  getSubregion(name: string) {
    return this.Http.get(this.Baseurl + `subregion/${name}`);
  }
}
