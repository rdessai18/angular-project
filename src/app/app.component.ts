import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopRecipeApp';
  feature: string = "recipe";
  selectFeature(selectedFeature: string){
    this.feature=selectedFeature;
  }
}
