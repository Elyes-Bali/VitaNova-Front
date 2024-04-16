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
    dateAdded: Date;
    datePreparation:Date;
    description: string;
    images: string;
    name: string;

    ingredients: Ingredients[];

    constructor(idRecepies: number,dateAdded:Date,datePreparation:Date, description: string, images: string,name: string, ingredients: Ingredients[]) {
        this.idRecepies = idRecepies;
        
        this.dateAdded=dateAdded;
        this.datePreparation=datePreparation;
        this.description = description;
        this.images = images;
        this.name=name;
        this.ingredients = ingredients;
    }
  }