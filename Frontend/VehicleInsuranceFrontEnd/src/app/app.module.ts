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
import { VehicleService } from './services/vehicleService';
import { PolicyService } from './services/policyService';
import { PaymentService } from './services/paymentService';

import { InsertModelsService } from './services/insertModelService';


import { ProfileService } from './services/profileService';

import { SuccessComponent } from './success/success.component';
import { ClaimsuccessComponent } from './claimsuccess/claimsuccess.component';
import { ClaimService } from './services/claimService';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RenewPolicyComponent } from './renew-policy/renew-policy.component';
import { RenewService } from './services/renewService';
import { AdminService} from './services/adminService';
import { RenewFromPrevPolicyComponent } from './renew-from-prev-policy/renew-from-prev-policy.component';
import { RenewFromPrevPolicy } from './services/renewFromPrevPolicy';
import { EstimateService } from './services/estimateService';
import { ClaimdisplayComponent } from './claimdisplay/claimdisplay.component';

import { FetchClaimsComponent } from './fetch-claims/fetch-claims.component';
import { InsertVehicleModelComponent } from './insert-vehicle-model/insert-vehicle-model.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AboutUsComponent } from './about-us/about-us.component';


var myRoutes:Routes=[
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"p",component:UserloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"forgotpassword",component:ResetpasswordComponent},
  {path:"resetpassword",component:ResetpasswordComponent},
  {path:"vehicle",component:VehicleComponent},
  {path:"policy",component:PolicyComponent},
  {path:"userdashboard",component:UserhomeComponent},
  {path:"userhome",component:UserhomeComponent},
  {path:"payment",component:PaymentComponent},
  {path:"success",component:SuccessComponent},
  {path:"claimsuccess",component:ClaimsuccessComponent},
  {path:"claim",component:ClaimComponent},
  {path:"profile",component:UserprofileComponent},
  {path:"profile",component:UserprofileComponent},
  {path:"renew",component:RenewPolicyComponent},
  {path:"admindashboard",component:AdmindashboardComponent},
  {path:"estimate",component:EstimateComponent},
  {path:"renewfromprev",component:RenewFromPrevPolicyComponent},
  {path:"claimdisplay",component:ClaimdisplayComponent},
  {path:"home",component:HomepageComponent},
  {path:"card",component:CardDetailsComponent},

  {path:"fetchclaimforadmin",component:FetchClaimsComponent},
  
  {path:'home',component:HomepageComponent},
  {path:"claim",component:ClaimComponent},
  {path:"error",component:ErrorpageComponent},
  {path:"insertModel",component:InsertVehicleModelComponent},
  {path:"contactUs",component:ContactpageComponent},
  {path:"aboutUs",component:AboutUsComponent},

{path:"**",component:UserhomeComponent},

  
  
  
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
    AdmindashboardComponent,
    SuccessComponent,
    ClaimsuccessComponent,
    UserprofileComponent,
    RenewPolicyComponent,
    RenewFromPrevPolicyComponent,
    ClaimdisplayComponent,
    FetchClaimsComponent,
    InsertVehicleModelComponent,
    CardDetailsComponent,
    ErrorpageComponent,
    ContactpageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [RegisterationService,DatePipe,LoginService,SharedService,VehicleService,PolicyService,PaymentService,ClaimService,ProfileService,RenewService,AdminService,RenewFromPrevPolicy,EstimateService,InsertModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
