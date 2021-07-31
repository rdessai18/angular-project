import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {  Recipe } from '../recipes/recipe.model';
import { Ingrediant } from '../shopping/shopping.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor( private shoppingService: ShoppingService) { }
  recipeChangesEvt = new Subject<Recipe[]>();
  
  private recipes: Recipe[] =[
    new Recipe(
      1,
      "Kadhai Paneer",
      "Paneer Recipe Description",
    "https://i1.wp.com/vegecravings.com/wp-content/uploads/2016/08/Kadai-Paneer-Gravy-Recipe-Step-By-Step-Instructions-Pinterest.jpg?w=806&quality=65&strip=all&ssl=1",
    [
      new Ingrediant("Paneer",2),
      new Ingrediant("Onion",3),
      new Ingrediant("Tomatoes",5)
    ]),
    new Recipe(
      2,
      "Chicken Masala",
      "Chicken Recipe Description",
    "https://thefoodhog.com/wp-content/uploads/2020/03/Chicken-Masala-Curry-735x651.jpg",
    [
      new Ingrediant("Chicken",2),
      new Ingrediant("Onion",6),
      new Ingrediant("Tomatoes",10)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipeById(id: number){
    return this.recipes[id-1];
  }

  selectedRecipeEvent = new Subject<Recipe>();

  addIngToShoppingList(recipeIng: Ingrediant[]){
    this.shoppingService.addIngToList(recipeIng);
  }

  addNewRecipe(recipe: Recipe){
    this.recipes.slice().push(recipe);
    this.recipeChangesEvt.next(this.recipes);
    console.log("added new recipe");
  }

  updateRecipe(id: number, recipe: Recipe){
    console.log(recipe.name);
    this.recipes.slice()[id-1]=recipe;
    this.recipeChangesEvt.next(this.recipes);
    console.log("recipe changed" + id + recipe);
  }
}
