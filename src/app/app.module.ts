import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobApplicantComponent } from './components/job-applicant/job-applicant.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterRecruiterComponent } from './components/register-recruiter/register-recruiter.component';
import { RegisterCandidateComponent } from './components/register-candidate/register-candidate.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobListComponent,
    JobDetailComponent,
    JobApplicantComponent,
    JobCreateComponent,
    LoginComponent,
    RegisterRecruiterComponent,
    RegisterCandidateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
