import * as querystring from 'querystring';
import { Recipe, SearchModel } from '../../models/recipe-models';
import { RecipeService } from '../../services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  queryString: string;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  public ngOnInit(): void {

  }
  
  search() {
    if (this.queryString)
      this.recipeService.search(this.queryString).subscribe(result => this.recipes = result.hits);
  }
  isInvalid() {
    return false;
  }
}
