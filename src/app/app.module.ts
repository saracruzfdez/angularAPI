import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ButtonDetailComponent } from './button-detail/button-detail.component'; 
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateIngredientRecipeComponent } from './ingredients-form/ingredients-form.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';
import { QuantityPipe } from './quantity.pipe';
// import { ButtonsSecondairesComponent } from './buttons-secondaires/buttons-secondaires.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ButtonDetailComponent,
    RecipeFormComponent,
    ListRecipeComponent,
    CategoryFormComponent,
    ListCategoryComponent,
    CreateIngredientRecipeComponent,
    OneRecipeComponent,
    QuantityPipe,
    // ButtonsSecondairesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }