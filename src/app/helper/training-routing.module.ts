import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from '../training/welcome/welcome.component';
import { SingupComponent } from '../auth/singup/singup.component';
import { LoginComponent } from '../auth/login/login.component';
import { TrainingComponent } from '../training/training.component';


const aRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(aRoutes) ],
  exports: [ RouterModule ]
})
export class TrainingRoutingModule { }
