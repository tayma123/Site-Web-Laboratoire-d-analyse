import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Home1Component } from './components/home1/home1.component';
import { ResultatComponent } from './components/resultat/resultat.component';



const routes: Routes = [{ path: "analyses", component:AnalyseComponent},{ path: "users", component:UsersComponent},
{ path: "", component:Home1Component},{ path: "login", component:LoginComponent},{path: 'register', component: RegisterComponent},
{ path: "RDV", component:RdvComponent},{ path: "profile", component:ProfileComponent},{ path: "resultat", component:ResultatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
