import { Ingrediant } from "./shopping.model";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  constructor() { }

  ingredientList: Ingrediant[]=[
    new Ingrediant("Sugar",2),
    new Ingrediant("Tea",6)
  ];
  
  addIngrediantItem(ing: Ingrediant){
    this.ingredientList.push(ing);
  }

  getIngrediantList(){
    return this.ingredientList;
  }

  getIngrediantListByName(ing: Ingrediant){
    
  }

  updateIngrediant(ing: Ingrediant){
    this.getIngrediantList().forEach(element => {
      if(element.name === ing.name){
        element.name=ing.name;
        element.amount=ing.amount;
      }
    });
  }
  addIngToList(recipeIng: Ingrediant[]){
    this.ingredientList.push(...recipeIng);
  }

  populateIngSubject = new Subject<Ingrediant>();
}
