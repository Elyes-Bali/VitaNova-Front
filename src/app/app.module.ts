import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogoComponent} from './logo/logo.component';
import {RegisterComponent} from './register/register.component';
import {TrainComponent} from './train/train.component';
import {PhysiqueComponent} from './physique/physique.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsComponent} from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {ListProductsComponent} from './allProducts/listProds/list-products/list-products.component';
import {EditProductsComponent} from './allProducts/editProds/edit-products/edit-products.component';
import {DetailsProductsComponent} from './allProducts/detailProds/details-products/details-products.component';
import {DeleteProductsComponent} from './allProducts/deleteProds/delete-products/delete-products.component';
import {DashProductsComponent} from './Dashs/productsDash/dash-products/dash-products.component';
import {DeleteProdsDashComponent} from './Dashs/prodsDelDash/delete-prods-dash/delete-prods-dash.component';
import {AddToCartComponent} from './Cart/addToCart/add-to-cart/add-to-cart.component';
import {VerifiactionComponent} from './verifiaction/verifiaction.component';
import {ModifierUserComponent} from './modifier-user/modifier-user.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {ListUserComponent} from './list-user/list-user.component';
import {FoodDataServiceComponent} from './food-data-service/food-data-service.component';
import {NgOptimizedImage} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CommunityListComponent} from './community/community-list/community-list.component';
import {CommunityPostsComponent} from './community/community-posts/community-posts.component';
import {CommunityPostDetailsComponent} from './community/community-post-details/community-post-details.component';
import {IngredientsComponent} from './ingredients/ingrédients-componets/ingredients/ingredients.component';

import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RecipeComponent} from './ingredients/recipes-components/recipe/recipe.component';
import {ListComponent} from './ingredients/listingredients/list/list.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {httpInterceptorProviders} from "./_helpers/http.interceptor";
import {TimeagoModule} from "ngx-timeago";
import {CommunityListAdminComponent} from './community/community-list-admin/community-list-admin.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    LoginComponent,
    LogoComponent,
    RegisterComponent,
    TrainComponent,
    PhysiqueComponent,
    DashboardComponent,
    ProductsComponent,
    ListProductsComponent,
    EditProductsComponent,
    DetailsProductsComponent,
    DeleteProductsComponent,
    DashProductsComponent,
    DeleteProdsDashComponent,
    AddToCartComponent,
    VerifiactionComponent,
    ListUserComponent,
    ModifierUserComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    FoodDataServiceComponent,
    CommunityListComponent,
    CommunityPostsComponent,
    CommunityPostDetailsComponent,
    IngredientsComponent,
    RecipeComponent,

    ListComponent,
    CommunityListAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    NgOptimizedImage,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule, TimeagoModule.forRoot()
  ],
  providers: [BsModalService, FoodDataServiceComponent, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
