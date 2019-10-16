import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-paymentadvicenote',
  templateUrl: './paymentadvicenote.component.html',
  styleUrls: ['./paymentadvicenote.component.css']
})
export class PaymentadvicenoteComponent implements OnInit {
  paymentadvisorynotes:PaymentAdviceNote[]=[]
  constructor(private service:UploadFileService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.GeneratePaymentAdvanceNote().subscribe(data=>{
      this.paymentadvisorynotes=data;
      console.log(this.paymentadvisorynotes);
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
    });
  }

}
class PaymentAdviceNote{
  
}
