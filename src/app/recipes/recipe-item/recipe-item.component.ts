import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipedetailsEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  // onSelectRecipe(){
  //   console.log("recipe item clicked");
  //  // this.recipedetailsEvent.emit();
  //   this.recipeService.selectedRecipeEvent.next(this.recipe);
  // }

}
