import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component'

import { LoginComponent } from './login/login.component';

import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogoComponent } from './logo/logo.component';
import { RegisterComponent } from './register/register.component';
import { TrainComponent } from './train/train.component';
import { PhysiqueComponent } from './physique/physique.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPsychologueComponent } from './components/list-psychologue/list-psychologue.component';
import { AddPsychoComponent } from './components/addpsycho/addpsycho/addpsycho.component';
import { EditpsychoComponent } from './components/editpsycho/editpsycho.component';
import { DetailpsychoComponent } from './components/detailpsycho/detailpsycho.component';
import { DeletepsychoComponent } from './components/deletepsycho/deletepsycho.component';
import { ListRapportPsyComponent } from './components/RapportPsy/list-rapport-psy/list-rapport-psy.component';
import { AddRapportPsyComponent } from './components/RapportPsy/add-rapport-psy/add-rapport-psy.component';
import { EditRapportpsyComponent } from './components/RapportPsy/edit-rapportpsy/editrapportpsy.component';
import { ShowRapportpsyComponent } from './components/RapportPsy/show-rapportpsy/detailrapportpsy.component';
import { DeleterapportComponent } from './components/deleterapport/deleterapport.component';
import { StatsComponent } from './components/statistiques/stats/stats.component';
import { AddconssultationComponent } from './components/consultation/addconssultation/addconssultation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { UpdateconssultationComponent } from './components/consultation/updateconssultation/updateconssultation.component';
import { ShowconssultationComponent } from './components/consultation/showconssultation/showconssultation.component';
import { DeleteconssultationComponent } from './components/consultation/deleteconssultation/deleteconssultation.component';
import { ListconssultationComponent } from './components/consultation/listconssultation/listconssultation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListpsychoclientComponent } from './components/Front/Listpsychologueclient/listpsychoclient/listpsychoclient.component';
import { ListrapportpsyAdminComponent } from './backoff/rapportpsy/listrapportpsy-admin/listrapportpsy-admin.component';
import { EditrapportpsyAdminComponent } from './backoff/rapportpsy/editrapportpsy-admin/editrapportpsy-admin.component';
import { DeleterapportpsyComponent } from './components/RapportPsy/deleterapportpsy/deleterapportpsy.component';
import { DeleterapportpsyadminComponent } from './backoff/deleterapportpsyadmin/deleterapportpsyadmin.component';
import { ShowrapportpsyasminComponent } from './backoff/rapportpsy/showrapportpsyasmin/showrapportpsyasmin.component';
import { ServiceComponentComponent } from './user/service-component/service-component.component';
import { ForgetpasswordcomponentComponent } from './user/forgetpasswordcomponent/forgetpasswordcomponent.component';
import { ResetpasswordcomponentComponent } from './user/resetpasswordcomponent/resetpasswordcomponent.component';
import { ListusercomponentComponent } from './user/listusercomponent/listusercomponent.component';
import { ModifierUserComponentComponent } from './user/modifier-user-component/modifier-user-component.component';
import { VerifiactionComponentComponent } from './user/verifiaction-component/verifiaction-component.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    
    
    LoginComponent,
    LogoComponent,
    RegisterComponent,
    TrainComponent,
    PhysiqueComponent,
    DashboardComponent,
    ListPsychologueComponent,
    AddPsychoComponent,
    EditpsychoComponent,
    DetailpsychoComponent,
    DeletepsychoComponent,
    ListRapportPsyComponent,
    AddRapportPsyComponent,
    EditRapportpsyComponent,
    ShowRapportpsyComponent,
    DeleterapportComponent,
    StatsComponent,
    AddconssultationComponent,
    UpdateconssultationComponent,
    ShowconssultationComponent,
    DeleteconssultationComponent,
    ListconssultationComponent,
    ChatbotComponent,
    SidebarComponent,
    ListpsychoclientComponent,
    ListrapportpsyAdminComponent,
    EditrapportpsyAdminComponent,
    DeleterapportpsyComponent,
    DeleterapportpsyadminComponent,
    ShowrapportpsyasminComponent,
    ServiceComponentComponent,
    ForgetpasswordcomponentComponent,
    ResetpasswordcomponentComponent,
    ListusercomponentComponent,
    ModifierUserComponentComponent,
    VerifiactionComponentComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
  
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
  
    MatSnackBarModule,
    BrowserModule,
    FormsModule 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
