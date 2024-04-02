import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Recipes } from '../models/ingredients.models';
 
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private baseUrl = 'http://localhost:8085/vita/recipes'; // Assurez-vous de mettre le bon port et le bon chemin d'accès

  constructor(private http: HttpClient) { }

  addRecipe(recipe: Recipes): Observable<Recipes> {
    console.log(recipe)
    return this.http.post<Recipes>(this.baseUrl, recipe);
  }

  getRecipeById(id: number): Observable<Recipes> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Recipes>(url);
  }

  getAllRecipes(): Observable<Recipes[]> {
    return this.http.get<Recipes[]>(this.baseUrl);
  }

  updateRecipe(recipe: Recipes): Observable<any> {
    console.log(recipe);

    console.log(recipe.idRecepies);
 
     const url = `${this.baseUrl}/${recipe.idRecepies}`;
 
    console.log(url);
    return this.http.put(url, recipe);
  }
  getAllRecipesWithIngredients(ingredientId: number): Observable<Recipes[]> {
    return this.http.get<Recipes[]>(`${this.baseUrl}/ingredients/${ingredientId}`);
  }
  deleteRecipe(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
