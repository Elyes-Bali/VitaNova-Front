export class Products {
  idProducts?: number;
  prodName?: string;
  typeProd?: string;
  price?: number=0;
  quantityP?:number;
  descriptionP?: string;
  imageUrl?: File;
}
export class Cart {
  idCart?:number;
  ownerId?: number;
  products?: string;
  quantity?: number;
  total?: number;
  prods?: Products[];
}