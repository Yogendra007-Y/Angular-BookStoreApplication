import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './Component/home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
const routes: Routes = [
  {path :'',component:LoginComponent},
  {path:'homePage', component : HomeComponent},
  {path :'cart',component: CartComponent},
  {path : 'placeorder',component:PlaceorderComponent},
  {path :'login',component:LoginComponent},
  {path : 'signup', component:SignupComponent},
  {path:'forgotPassword', component : ForgotpasswordComponent},
  {path:'resetPassword', component : ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
