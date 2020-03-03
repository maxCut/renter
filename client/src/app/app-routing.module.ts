import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {SignUpComponent} from './sign-up/sign-up.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'signup', component: SignUpComponent},
{path: 'checkout', component: CheckoutComponent },
{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }