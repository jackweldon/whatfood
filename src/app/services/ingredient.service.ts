import { Injectable } from '@angular/core';
import { Ingredient } from '../models/recipe-models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class IngredientService {

  // Observable navItem source
  private _navItemSource = new BehaviorSubject<Ingredient[]>(null);
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();

  constructor() {
  }
  
  add(item: Ingredient[]) {
    this._navItemSource.next(item);
  }

}
