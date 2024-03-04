import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainComponent } from './train/train.component';
import { PhysiqueComponent } from './physique/physique.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPsychologueComponent } from './components/list-psychologue/list-psychologue.component';
import { AddPsychoComponent } from './components/addpsycho/addpsycho/addpsycho.component';
import { DetailpsychoComponent } from './components/detailpsycho/detailpsycho.component';
import { EditpsychoComponent } from './components/editpsycho/editpsycho.component';
import { DeletepsychoComponent } from './components/deletepsycho/deletepsycho.component';
import { ListRapportPsyComponent } from './components/RapportPsy/list-rapport-psy/list-rapport-psy.component';
import { AddRapportPsyComponent } from './components/RapportPsy/add-rapport-psy/add-rapport-psy.component';
import { ShowRapportpsyComponent } from './components/RapportPsy/show-rapportpsy/detailrapportpsy.component';
import { EditRapportpsyComponent } from './components/RapportPsy/edit-rapportpsy/editrapportpsy.component';



const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'train',component:TrainComponent},
  {path:'phy',component:PhysiqueComponent},
  {path:'dash',component:DashboardComponent},
  {path:'psy',component:ListPsychologueComponent},
  {path:'add-psy',component:AddPsychoComponent},
  {path:'show-psy/:id',component:DetailpsychoComponent},
  {path:'edit-psy/:id',component:EditpsychoComponent},
  {path:'delete-psy/:id',component:DeletepsychoComponent},
  {path:'rapportpsy',component:ListRapportPsyComponent},
  {path:'add-rapportpsy',component:AddRapportPsyComponent},
  {path:'show-rapportpsy/:id',component:ShowRapportpsyComponent},
    {path:'edit-rapportpsy/:id',component:EditRapportpsyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
