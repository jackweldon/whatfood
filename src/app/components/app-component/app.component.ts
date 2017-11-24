import { Recipe, SearchModel } from '../../models/recipe-models';
import { RecipeService } from '../../services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[RecipeService]
})
export class AppComponent implements OnInit {


    public ngOnInit(): void {
      
    }
}
