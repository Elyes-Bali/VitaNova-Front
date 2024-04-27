import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import{FormsModule , ReactiveFormsModule} from "@angular/forms";
import { LogoComponent } from './logo/logo.component';
import { RegisterComponent } from './register/register.component';
import { TrainComponent } from './train/train.component';
import { PhysiqueComponent } from './physique/physique.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifiactionComponent } from './verifiaction/verifiaction.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ListConsultationComponent } from './Front/Consultation/list-consultation/list-consultation.component';
import { ListpsyfrontComponentComponent } from './Front/psy/listpsyfront-component/listpsyfront-component.component';
import { AddconsultationComponent } from './Front/consultation/addconsultation/addconsultation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
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
import { MessageContainerComponent } from './message-container/message-container.component';


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
    VerifiactionComponent,
    ListUserComponent,
    ModifierUserComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    ListConsultationComponent,
    ListpsyfrontComponentComponent,
    AddconsultationComponent,
    EditconsultationComponent,
    ShowconsultationComponent,
    DeleteconsultationComponent,
    AddrapportpsyComponent,
    UpdaterapportpsyComponent,
    ListrapportpsyComponent,
    DeleterapportpsyComponent,
    ShowrapportpsyComponent,
    ListpsyadminComponent,
    StatsComponent,
    AdminlisrapportpsyComponent,
    AdminshowrapportpsyComponent,
    ChatbotComponent,
    TimeCalendarComponent,
    RatingComponent,
    StatspsyComponent,
    StatspsyconsultationComponent,
    ListconsultationComponent,
    ShowconsultationadminComponent,
    ListconsultationpsychiatreComponent,
    ShowconsultationpsychiatreComponent,
    ChatiebotieComponent,
    MessageContainerComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
