import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuplicatepaymentComponent } from './pages/duplicatepayment/duplicatepayment.component';
import { PaymentadvicenoteComponent } from './pages/paymentadvicenote/paymentadvicenote.component';
import { PaymentreconsilationComponent } from './pages/paymentreconsilation/paymentreconsilation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,FormBuilder,FormGroup,ReactiveFormsModule,FormControl  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BsDatepickerModule,BsModalRef,ModalModule,CarouselModule} from 'ngx-bootstrap';
import { UploadFileService } from './upload-file.service';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DuplicatepaymentComponent,
    PaymentadvicenoteComponent,
    PaymentreconsilationComponent,
	LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule, NgxPaginationModule
  ],
  providers: [UploadFileService,BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
