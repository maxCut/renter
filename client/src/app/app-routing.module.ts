import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'checkout', component: CheckoutComponent },
{path: 'about', component: AboutComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
