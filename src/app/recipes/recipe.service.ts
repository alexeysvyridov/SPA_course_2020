import { EventEmitter, Injectable } from '@angular/core'

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service'
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
    'Testy shnitzel',
    'amazing shnitzel - awesome!!!!',
    '../assets/shitzl.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(
    'Burger Fat Burger',
    'What else you need to say',
    '../assets/burger.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
    ])
  ];
  constructor(public slService:ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}
