import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://assets.bonappetit.com/photos/5c5478757969ab3ef9e26c09/16:9/w_400%2Cc_limit/chicken-cobb-salad.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://assets.bonappetit.com/photos/5c5478757969ab3ef9e26c09/16:9/w_400%2Cc_limit/chicken-cobb-salad.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
