import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainComponent } from './train/train.component';
import { PhysiqueComponent } from './physique/physique.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifiactionComponent } from './verifiaction/verifiaction.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import {ForgetpasswordComponent} from "./forgetpassword/forgetpassword.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";
import { ListpsyfrontComponentComponent } from './Front/psy/listpsyfront-component/listpsyfront-component.component';
import { ListConsultationComponent } from './Front/Consultation/list-consultation/list-consultation.component';
import { AddconsultationComponent } from './Front/consultation/addconsultation/addconsultation.component';
import { EditconsultationComponent } from './Front/Consultation/editconsultation/editconsultation.component';
import { ShowconsultationComponent } from './Front/Consultation/showconsultation/showconsultation.component';
import { DeleteconsultationComponent } from './Front/Consultation/deleteconsultation/deleteconsultation.component';
import { AddrapportpsyComponent } from './Front/Rapportpsy/addrapportpsy/addrapportpsy.component';
import { UpdaterapportpsyComponent } from './Front/Rapportpsy/updaterapportpsy/updaterapportpsy.component';
import { ListrapportpsyComponent } from './Front/Rapportpsy/listrapportpsy/listrapportpsy.component';
import { DeleterapportpsyComponent } from './Front/Rapportpsy/deleterapportpsy/deleterapportpsy.component';
import { ShowrapportpsyComponent } from './Front/Rapportpsy/showrapportpsy/showrapportpsy.component';
import { ListpsyadminComponent } from './Back/listpsyadmin/listpsyadmin.component';
import { StatsComponent } from './stats/stats.component';
import { AdminlisrapportpsyComponent } from './Back/rapportpsy/adminlisrapportpsy/adminlisrapportpsy.component';
import { AdminshowrapportpsyComponent } from './Back/rapportpsy/adminshowrapportpsy/adminshowrapportpsy.component';
import { ChatbotComponent } from './front/chatbot/chatbot.component';
import { TimeCalendarComponent } from './time-calendar/time-calendar.component';
import { RatingComponent } from './Front/rating/rating.component';
import { StatspsyComponent } from './Back/statspsy/statspsy.component';
import { StatspsyconsultationComponent } from './Back/statspsyconsultation/statspsyconsultation.component';
import { ListconsultationComponent } from './Back/Consultation/listconsultation/listconsultation.component';
import { ShowconsultationadminComponent } from './Back/Consultation/showconsultationadmin/showconsultationadmin.component';
import { ListconsultationpsychiatreComponent } from './Front/psy/listpsyfront-component/psyconsultation/listconsultationpsychiatre/listconsultationpsychiatre.component';
import { ShowconsultationpsychiatreComponent } from './Front/psy/listpsyfront-component/psyconsultation/showconsultationpsychiatre/showconsultationpsychiatre.component';
import { ChatiebotieComponent } from './chatiebotie/chatiebotie.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'id1',component:ServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  {path:'train',component:TrainComponent},
  {path:'phy',component:PhysiqueComponent},
  {path:'dash',component:DashboardComponent},
  {path:'listUser',component:ListUserComponent},
  {path:'listpsy',component:ListpsyadminComponent},
  {path:'edituser/:id',component:ModifierUserComponent},
  {path:'psyc',component:ListpsyfrontComponentComponent},
  {path:'consultations',component:ListConsultationComponent},
  {path:'consultationsadmin',component:ListconsultationComponent},
  {path:'addconsultation/:id',component:AddconsultationComponent},
  {path:'editconsultation/:id',component:EditconsultationComponent},
  {path:'show/:id',component:ShowconsultationComponent},
  {path:'showconsultationadmin/:id',component:ShowconsultationadminComponent},
  {path:'deletec/:id',component:DeleteconsultationComponent},
  {path:'addrapport',component:AddrapportpsyComponent},
  {path:'editrapport/:id',component:UpdaterapportpsyComponent},
  {path:'rap',component:ListrapportpsyComponent},
  {path:'deleter/:id',component:DeleterapportpsyComponent},
  {path:'showrap/:id',component:ShowrapportpsyComponent},
  { path: 'stats/:id/:year/:month', component: StatsComponent },
  {path:'rapadmin',component:AdminlisrapportpsyComponent},
  {path:'showrapadmin/:id',component:AdminshowrapportpsyComponent},
  {path:'chatbot',component:ChatbotComponent},
  {path:'calendar',component:TimeCalendarComponent},
  {path:'rating/:id',component:RatingComponent},
  {path:'statspsy',component:StatspsyComponent},
  {path:'statspsyconsultation',component:StatspsyconsultationComponent},
  {path:'consultationpsy',component:ListconsultationpsychiatreComponent},
  {path:'showconsultationpsy/:id',component:ShowconsultationpsychiatreComponent},
  {path:'chat',component:ChatiebotieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
