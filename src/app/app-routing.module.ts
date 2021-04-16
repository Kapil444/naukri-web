import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobApplicantComponent } from './components/job-applicant/job-applicant.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterCandidateComponent } from './components/register-candidate/register-candidate.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },  
  { path: 'candidate-register', component: RegisterCandidateComponent },
  { path: 'job-post', component: JobCreateComponent },
  { path: 'job-detail', component: JobDetailComponent },
  { path: 'job-applicant', component: JobApplicantComponent },
  { path: 'job-list', component: JobListComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
