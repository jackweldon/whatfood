import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

@Injectable()
export class RecipeService {
  appKey: string = '';
  appId: string = '';
  private readonly serviceEndpoint = 'https://api.edamam.com/search?app_id=' + this.appId + '&app_key=' + this.appKey;
  constructor(private http: Http) { }

  search(query) {
    // return this.http.get("../../assets/test-data.json").map(res => res.json());
    return this.http.get(this.serviceEndpoint + '&q=' + query).map(res => res.json());
  }
}


