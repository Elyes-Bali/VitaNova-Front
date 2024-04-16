import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TrainComponent} from './train/train.component';
import {PhysiqueComponent} from './physique/physique.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsComponent} from './products/products.component';
import {ListProductsComponent} from './allProducts/listProds/list-products/list-products.component';
import {EditProductsComponent} from './allProducts/editProds/edit-products/edit-products.component';
import {DetailsProductsComponent} from './allProducts/detailProds/details-products/details-products.component';
import {DeleteProductsComponent} from './allProducts/deleteProds/delete-products/delete-products.component';
import {DashProductsComponent} from './Dashs/productsDash/dash-products/dash-products.component';
import {AddToCartComponent} from './Cart/addToCart/add-to-cart/add-to-cart.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {ListUserComponent} from './list-user/list-user.component';
import {ModifierUserComponent} from './modifier-user/modifier-user.component';
import {VerifiactionComponent} from './verifiaction/verifiaction.component';
import {CommunityListComponent} from "./community/community-list/community-list.component";
import {CommunityPostsComponent} from "./community/community-posts/community-posts.component";
import {CommunityPostDetailsComponent} from "./community/community-post-details/community-post-details.component";
import {IngredientsComponent} from './ingredients/ingrédients-componets/ingredients/ingredients.component';
import {RecipeComponent} from './ingredients/recipes-components/recipe/recipe.component';
import {ListComponent} from './ingredients/listingredients/list/list.component';
import {CommunityListAdminComponent} from "./community/community-list-admin/community-list-admin.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'id1', component: ServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'train', component: TrainComponent},
  {path: 'phy', component: PhysiqueComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'prod', component: ProductsComponent},
  {path: 'dashProds', component: DashProductsComponent},
  {path: 'cart', component: AddToCartComponent},
  {path: 'listProds', component: ListProductsComponent},
  {path: 'editeProds/:id', component: EditProductsComponent},
  {path: 'detailProds/:id', component: DetailsProductsComponent},
  {path: 'deleteProds/:id', component: DeleteProductsComponent},
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'listUser', component: ListUserComponent},
  {path: 'edituser/:id', component: ModifierUserComponent},
  {path: 'verify', component: VerifiactionComponent},
  {path: 'community/:communityId/feed', component: CommunityPostsComponent},
  {path: 'community/:communityId/feed/post/:postId', component: CommunityPostDetailsComponent},
  {path: 'community', component: CommunityListComponent},
  {path: 'admin/community', component: CommunityListAdminComponent},
  {path: 'listIngredients', component: ListComponent},
  {path: 'listRecette', component: RecipeComponent},
  {path: 'ingredients', component: IngredientsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
