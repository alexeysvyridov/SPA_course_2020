import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';

@Component({
  selector: 'app-shopping-eddit',
  templateUrl: './shopping-eddit.component.html',
  styleUrls: ['./shopping-eddit.component.css']
})
export class ShoppingEdditComponent implements OnInit {
  @ViewChild("nameInput", {static: true}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
