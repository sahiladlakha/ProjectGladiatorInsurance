import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PolicyComponent } from './policy/policy.component';
import { PaymentComponent } from './payment/payment.component';
import { ClaimComponent } from './claim/claim.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RegisterationService} from './services/registerationService';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LoginService } from './services/loginService';
import { SharedService } from './services/sharedService';


var myRoutes:Routes=[
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"p",component:UserloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"forgotpassword",component:ResetpasswordComponent},
  {path:"resetpassword",component:ResetpasswordComponent},

  {path:'**',component:HomepageComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    VehicleComponent,
    PolicyComponent,
    PaymentComponent,
    ClaimComponent,
    UserhomeComponent,
    EstimateComponent,
    RegisterComponent,
    LoginComponent,
    UserloginComponent,
    AdminloginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [RegisterationService,DatePipe,LoginService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
