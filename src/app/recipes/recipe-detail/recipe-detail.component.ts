import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingrediant } from 'src/app/shopping/shopping.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  //@Input() 
  recipe: Recipe;
  id: number;
  recipeSubscription: Subscription;
  constructor( private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id'];
    this.recipeSubscription = this.route.params
      .subscribe(
        (params: Params) => {
           this.id= +params['id'];
           console.log(this.id);
           this.recipe= this.recipeService.getRecipeById(this.id);
           console.log("recipe with ID clicked");
           console.log(this.recipe);
        }
      );
  }

  addToShoppingList(){
    this.recipeService.addIngToShoppingList(this.recipe.ingrediants);
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }
}
