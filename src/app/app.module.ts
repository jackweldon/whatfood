import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app-component/app.component';
import { RecipeService } from './services/recipe.service';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NavComponent } from './components/nav/nav.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientService } from './services/ingredient.service';
@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    NavComponent, RecipeListComponent, IngredientListComponent
  ],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [RecipeService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
