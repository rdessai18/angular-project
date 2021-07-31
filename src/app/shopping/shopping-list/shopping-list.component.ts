import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shopping.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingrediant[]=[];

  constructor( private shoppingService: ShoppingService) { }
  

  ngOnInit(): void {
    this.ingredientList = this.shoppingService.getIngrediantList();
  }

  addIngrItem(ingr: Ingrediant){
    this.shoppingService.addIngrediantItem(ingr);
  }

  populateIng(ing: Ingrediant){
    this.shoppingService.populateIngSubject.next(ing);
  }
}
