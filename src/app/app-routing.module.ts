import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { UdvdataComponent } from './pages/udvdata/udvdata.component';
import { DuplicatepaymentComponent } from './pages/duplicatepayment/duplicatepayment.component';
import { PaymentadvicenoteComponent } from './pages/paymentadvicenote/paymentadvicenote.component';
import { PaymentreconsilationComponent } from './pages/paymentreconsilation/paymentreconsilation.component';
import { ViewhistoryComponent } from './pages/viewhistory/viewhistory.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';
import { VendorlistComponent } from './pages/vendorlist/vendorlist.component';
import { PaymentadvicependingComponent } from './pages/paymentadvicepending/paymentadvicepending.component';
import {MatButtonModule} from '@angular/material/button';
import { PendingrecordsComponent } from './pages/pendingrecords/pendingrecords.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  
  {path:'', component:ShellComponent,
  children:[
  {path: 'home', component: HomeComponent},
  {path: 'udvdata', component: UdvdataComponent},
  {path:'duplicatepayment', component: DuplicatepaymentComponent},
  {path:'paymentadvicenote', component: PaymentadvicenoteComponent},
  {path: 'paymentreconsilation', component:PaymentreconsilationComponent},
  {path: 'viewhistory', component: ViewhistoryComponent},
  {path:'paymentadvicenotepending', component: PaymentadvicependingComponent},
  {path:'sapbpcspending', component: PendingrecordsComponent},
  {path:'vendorlist',component:VendorlistComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule,MatButtonModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, 
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  ShellComponent, 
  HomeComponent, 
  UdvdataComponent, DuplicatepaymentComponent, 
  PaymentadvicenoteComponent, PaymentreconsilationComponent,
  ViewhistoryComponent,VendorlistComponent,PaymentadvicependingComponent,PendingrecordsComponent ]
