import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeDetailEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] ;
  constructor( private router: Router, private currentRoute: ActivatedRoute,
       private recipeService: RecipeService) { }
  
  ngOnInit(): void {
    this.recipeService.recipeChangesEvt.subscribe(
      (recipeA: Recipe[]) => {
        this.recipes=recipeA;
      }
    );
    this.recipes = this.recipeService.getRecipes(); 
  }

  createNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.currentRoute});
  }

  // populateRecipeDetails(recipe: Recipe){
  //   console.log("recipe list item clicked");
  //   console.log(recipe);
  //   //this.recipeDetailEvent.emit(recipe);
  // }
}
