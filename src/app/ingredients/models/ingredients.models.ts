export class Ingredients {
    idIngredients: number;
    description: string;
    products: string;
    images: string;
    recipes: Recipes[];
    constructor(idIngredients: number, description: string, products: string, images:string,recipes: Recipes[]) {
        this.idIngredients = idIngredients;
        this.description = description;
        this.products=products;
        this.images = images;
        this.recipes = recipes;
    }
 
  }
  export class Recipes {
    idRecepies: number;
    description: string;
    images: string;
    ingredients: Ingredients[];

    constructor(idRecepies: number, description: string, images: string, ingredients: Ingredients[]) {
        this.idRecepies = idRecepies;
        this.description = description;
        this.images = images;
        this.ingredients = ingredients;
    }
  }