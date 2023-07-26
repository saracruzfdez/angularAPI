import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategoryFormComponent} from './category-form/category-form.component';
import { ListCategoryComponent } from './list-category/list-category.component';

// tableau de route a integrer sur nos liens :
const routes: Routes=[
{ path: '', component: HomeComponent    },
{ path: 'formRecipe', component: RecipeFormComponent},
{ path: 'formRecipe/:id', component: RecipeFormComponent},
{ path: 'listRecipe', component: ListRecipeComponent},
{ path: 'formCategory', component: CategoryFormComponent},
{ path: 'formCategory/:id', component: CategoryFormComponent},
{ path: 'listCategory', component: ListCategoryComponent}

]


@NgModule(
  {
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports:[
      RouterModule
    ]
  }
)

export class AppRoutingModule { }