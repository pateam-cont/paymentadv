import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentreconsilationComponent } from './pages/paymentreconsilation/paymentreconsilation.component';
import { FormsModule ,FormBuilder,FormGroup,ReactiveFormsModule,FormControl  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BsDatepickerModule,BsModalRef,ModalModule,CarouselModule} from 'ngx-bootstrap';
import { UploadFileService } from './upload-file.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShellComponent } from './shell/shell.component';
import { VendorlistComponent } from './pages/vendorlist/vendorlist.component';
import { PaymentadvicependingComponent } from './pages/paymentadvicepending/paymentadvicepending.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PendingrecordsComponent } from './pages/pendingrecords/pendingrecords.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PaymentreconsilationComponent,
    ShellComponent,
    VendorlistComponent,
    PaymentadvicependingComponent,
    PendingrecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule, NgxPaginationModule,Ng2SearchPipeModule, BrowserAnimationsModule
  ],
  providers: [UploadFileService,BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
