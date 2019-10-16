import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService, CarouselConfig } from 'ngx-bootstrap';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {
  advisnotearr:PaymentAdviceNote[]=[]
  itemsPerPage=10
  constructor(private spinner:NgxSpinnerService,private fileuploadservice:UploadFileService) { }

  ngOnInit() {
    this.getUploadedData()
  }

  getUploadedData(){
    this.spinner.show();
    this.fileuploadservice.getPaymentAdvisNoteHeader().subscribe(
    data=>{
      this.advisnotearr=data;
      console.log(this.advisnotearr);
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
    })
  }

}
class PaymentAdviceNote{
  VendorCode;
  VendorContanctName
  VendorEmail
  VendorAccount
  VendorBankIFSC
  VendorBankName
  ChequeUTRNo
  MailSendFlag
}

