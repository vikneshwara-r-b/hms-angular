import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './profile/doctor/doctor.component';
import { PatientComponent } from './profile/patient/patient.component';


const routes: Routes = [
  {path:"profile" , component:ProfileComponent,children:
[
  {path:'patients',component:PatientComponent
},
  {path:'doctors',component:DoctorComponent},
  {path: '', redirectTo:'profile', pathMatch:"full"}
]
},
{path:"login" , component : LoginComponent },
{path: '', redirectTo:'login', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
