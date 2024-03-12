import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import{FormsModule , ReactiveFormsModule} from "@angular/forms";
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





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    
    ContactComponent,
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
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
