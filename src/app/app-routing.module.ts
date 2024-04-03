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
import { StatsComponent } from './components/statistiques/stats/stats.component';
import { AddconssultationComponent } from './components/consultation/addconssultation/addconssultation.component';
import { UpdateconssultationComponent } from './components/consultation/updateconssultation/updateconssultation.component';
import { ShowconssultationComponent } from './components/consultation/showconssultation/showconssultation.component';
import { DeleteconssultationComponent } from './components/consultation/deleteconssultation/deleteconssultation.component';
import { ListconssultationComponent } from './components/consultation/listconssultation/listconssultation.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ListpsychoclientComponent } from './components/Front/Listpsychologueclient/listpsychoclient/listpsychoclient.component';
import { ListrapportpsyAdminComponent } from './backoff/rapportpsy/listrapportpsy-admin/listrapportpsy-admin.component';
import { EditrapportpsyAdminComponent } from './backoff/rapportpsy/editrapportpsy-admin/editrapportpsy-admin.component';
import { DeleterapportpsyComponent } from './components/RapportPsy/deleterapportpsy/deleterapportpsy.component';
import { DeleterapportpsyadminComponent } from './backoff/deleterapportpsyadmin/deleterapportpsyadmin.component';
import { ShowrapportpsyasminComponent } from './backoff/rapportpsy/showrapportpsyasmin/showrapportpsyasmin.component';
import { ForgetpasswordcomponentComponent } from './user/forgetpasswordcomponent/forgetpasswordcomponent.component';
import { ResetpasswordcomponentComponent } from './user/resetpasswordcomponent/resetpasswordcomponent.component';
import { ListusercomponentComponent } from './user/listusercomponent/listusercomponent.component';
import { ModifierUserComponentComponent } from './user/modifier-user-component/modifier-user-component.component';
import { VerifiactionComponentComponent } from './user/verifiaction-component/verifiaction-component.component';
import { ServiceComponentComponent } from './user/service-component/service-component.component';



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
    {path:'admin/rapportpsy',component:ListrapportpsyAdminComponent},
    {path:'admin/edit-rapportpsy/:id',component:EditrapportpsyAdminComponent},

   { path: 'stats/:psychologueId/:year/:month', component: StatsComponent },
   {path: 'addc/:userId', component: AddconssultationComponent },
   {path:'editconsultation/:id',component:UpdateconssultationComponent},
   {path:'showc/:id',component:ShowconssultationComponent},
   {path:'deletec/:id',component:DeleteconssultationComponent},
   {path:'consultations',component:ListconssultationComponent},
   {path:'chatbot',component:ChatbotComponent},
   {path:'psyc',component:ListpsychoclientComponent},
   {path:'deleterapportpsy/:id',component:DeleterapportpsyComponent},
   {path:'admin/deleterapportpsy/:id',component:DeleterapportpsyadminComponent},
   {path:'admin/showrapportpsy/:id',component:ShowrapportpsyasminComponent},
   {path:'id1',component:ServiceComponentComponent},

   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   { path: 'forgetpassword', component: ForgetpasswordcomponentComponent },
   { path: 'resetpassword', component: ResetpasswordcomponentComponent },
   {path:'train',component:TrainComponent},
   {path:'phy',component:PhysiqueComponent},
   {path:'dash',component:DashboardComponent},
   {path:'listUser',component:ListusercomponentComponent},
   {path:'edituser/:id',component:ModifierUserComponentComponent},
   {path:'verify',component:VerifiactionComponentComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
