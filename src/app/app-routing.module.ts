import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipestartComponent } from './recipes/recipestart/recipestart.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path:"", redirectTo:"/recipe", pathMatch:"full"},
  {path:"recipe", component: RecipesComponent, children:[
    {path:"", component: RecipestartComponent},    
    {path:"new", component: RecipeEditComponent},
    {path:":id", component: RecipeDetailComponent},
    {path:":id/edit", component: RecipeEditComponent}
  ]},
  {path:"shopping", component: ShoppingListComponent},
  {path:"auth", component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
