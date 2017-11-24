import { IngredientService } from '../../services/ingredient.service';
import { Recipe } from '../../models/recipe-models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: []

})
export class RecipeComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Output('getIngredients') recipeClicked = new EventEmitter<Recipe>();

  constructor(private ingredientService: IngredientService) {

  }

  addIngredients() {
    this.ingredientService.add(this.recipe.ingredients);
  }

  public ngOnInit(): void {
  }
}
