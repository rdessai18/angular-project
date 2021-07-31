import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingrediant } from 'src/app/shopping/shopping.model';
import { ShoppingService } from 'src/app/shopping/shopping.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEdit:boolean = false;
  constructor(private routes: ActivatedRoute, private recipeService: RecipeService) { }
  recipeEditForm: FormGroup;
  recipe: Recipe;

  get controls() {
    return (<FormArray>this.recipeEditForm.get('recipeIngrediant')).controls;
  } 

  ngOnInit(): void {
    this.routes.params
      .subscribe(
        (params: Params)=>{
          this.id = params['id'] ;
          this.isEdit= params['id'] != null;
          console.log("Id in edit " + this.isEdit);
          this.ngFormInit();
        }
      );
  }

  ngFormInit(){
   let recipeName = '';
   let recipeDesc = '';
   let recipeImagePath = '';
   let recipeIng = new FormArray([]);

   if (this.isEdit){
     const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImagePath = recipe.imagePath;

      if (recipe['ingrediants']){
        for(let ing of recipe.ingrediants){
          recipeIng.push(new FormGroup({
            'ingName': new FormControl(ing.name,Validators.required),
            'ingAmount': new FormControl(ing.amount,Validators.required),
          }));
        }
      }
   } 
    this.recipeEditForm = new FormGroup({
        'recipeName' : new FormControl(recipeName,Validators.required),
        'recipeDesc' : new FormControl(recipeDesc,Validators.required),
        'recipeImagePath' : new FormControl(recipeImagePath,Validators.required),
        'recipeIngrediant': recipeIng
      });

      
  }

  addIngSlot(){
    this.controls.push( new FormGroup({
      'ingName': new FormControl(null, Validators.required),
      'ingAmount': new FormControl(null, Validators.required)
    }));
  }
  onFormSubmit(){
    if(this.isEdit){
      this.recipeService.updateRecipe(this.id,this.recipeEditForm.value);
    } else{
      this.recipeService.addNewRecipe(this.recipeEditForm.value);
    }
  }
}
