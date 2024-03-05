import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainComponent } from './train/train.component';
import { PhysiqueComponent } from './physique/physique.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './allProducts/listProds/list-products/list-products.component';
import { EditProductsComponent } from './allProducts/editProds/edit-products/edit-products.component';
import { DetailsProductsComponent } from './allProducts/detailProds/details-products/details-products.component';
import { DeleteProductsComponent } from './allProducts/deleteProds/delete-products/delete-products.component';
import { DashProductsComponent } from './Dashs/productsDash/dash-products/dash-products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'id1',component:ServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'train',component:TrainComponent},
  {path:'phy',component:PhysiqueComponent},
  {path:'dash',component:DashboardComponent},
  {path:'prod',component:ProductsComponent},
  {path:'dashProds',component:DashProductsComponent},
  {path:'listProds',component:ListProductsComponent},
  {path:'editeProds/:id',component:EditProductsComponent},
  {path:'detailProds/:id',component:DetailsProductsComponent},
  {path:'deleteProds/:id',component:DeleteProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
