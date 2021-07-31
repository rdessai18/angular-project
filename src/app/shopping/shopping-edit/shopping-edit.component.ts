import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrediant } from '../shopping.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //@Output() addIngrEvent = new EventEmitter<Ingrediant>();
  @ViewChild('ingForm') ingForm: NgForm;
  populateIngSubscription: Subscription;
  editMode = false;
  constructor( private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.populateIngSubscription = this.shoppingService.populateIngSubject.subscribe(
      (ing: Ingrediant) => {
        this.editMode= true;
        this.ingForm.setValue({
          ingName: ing.name,
          ingAmount: ing.amount
        });        
      }
    );
  }

  addIngrediant(forms: NgForm){
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    const value = forms.value;
    const ingrediant = new Ingrediant(value.ingName,value.ingAmount);
    if(this.editMode){
      this.shoppingService.updateIngrediant(ingrediant);
    } else{
      this.shoppingService.addIngrediantItem(ingrediant);
    }
    this.editMode=false;
    forms.reset();
  }
  ngOnDestroy(){
    this.populateIngSubscription.unsubscribe();
  }

}
