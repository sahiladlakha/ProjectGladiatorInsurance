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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
