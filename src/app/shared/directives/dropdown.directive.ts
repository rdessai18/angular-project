import { Directive, ElementRef, HostBinding, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[toggleMangeRecipe]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  //constructor(private elementRef: ElementRef, private vcref: ViewContainerRef) { }

  @HostListener('click') toggleDropdown(){
      this.isOpen= !this.isOpen;
  }

}
