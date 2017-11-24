import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/recipe-models';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'; @Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  item: Ingredient;
  subscription: Subscription;
  constructor(private ingredientService: IngredientService) {
  }

  private onItemAdded(item: Ingredient): void {
    console.log("Adding item to list" + item.food)
    this.ingredients.push(item);
  }

  addToList(items: Ingredient[]) {
    for (var x = 0; x < items.length; x++) {
      this.ingredients.push(items[x]);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public ngOnInit(): void {
    this.subscription = this.ingredientService.navItem$
      .subscribe(item => {
        if (item) {
          this.addToList(item);
        }
      });
  }
}
