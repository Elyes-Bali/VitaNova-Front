import { Component, OnInit,TemplateRef } from '@angular/core';
import { ProductsService } from 'src/app/components/products.service';
import { Products } from 'src/app/models/products';
import { Ingredients, Recipes } from '../../models/ingredients.models';
import { IngredientsService } from '../../services/ingredients.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  modalRef?: BsModalRef;
  myURL?: string; // Variable pour stocker l'URL saisie par l'utilisateur
  imageToShow?: string;
  ingredients: Ingredients[] = [];
  recipes: Recipes[] = [];
ingredient?:Ingredients;
  products: Products[] = [];
  showForm: boolean = false;
  newIngredient: Ingredients = {
    idIngredients: 0,
    description: '',
    products: '',
    images: '',
    recipes: []
  };
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Créer l'URL de l'image sélectionnée localement
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageToShow = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log(reader)
    }
  }
  constructor(private ingredientsService: IngredientsService, private recipesSerivce: RecipesService,private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  openIngredientModal(template1: TemplateRef<any>,ingredient: Ingredients): void {
   this.recipesSerivce.getAllRecipesWithIngredients(ingredient.idIngredients).subscribe(
      (response: Recipes[]) => {
        this.recipes = response;
        this.ingredient=ingredient;
        this.ingredient.recipes=this.recipes;
      },
      (error: any) => {
        console.error(error);
      }
    );

 

     this.modalRef = this.modalService.show(template1);
  }
 
  ngOnInit(): void {
    this.loadIngredients();

 
  }
  onURLInserted() {
    // Mettre à jour l'URL de l'image à afficher avec celle saisie par l'utilisateur
    this.imageToShow = this.myURL;
    console.log(this.imageToShow)
  }
  showAddIngredientForm(): void {
    this.showForm = true;
  }

  addIngredient(): void {
    this.ingredientsService.addIngredient(this.newIngredient).subscribe(
      (response: Ingredients) => {
        this.ingredients.push(response);
     
        this.showForm = false;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  

  loadIngredients(): void {
    this.ingredientsService.getAllIngredients().subscribe(
      (response: Ingredients[]) => {
        this.ingredients = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

 
}
