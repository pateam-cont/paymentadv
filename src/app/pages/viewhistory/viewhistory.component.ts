import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService, CarouselConfig } from 'ngx-bootstrap';
import { UploadFileService } from 'src/app/upload-file.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExcelService } from 'src/app/excel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {
  advisnotearr:PaymentAdviceNote[]=[]
  itemsPerPage=10
  sendnote:any;
  form: FormGroup;
  chkData = [];
  searchText;
  url=""
  fromdate;
  todate;
  constructor(private spinner:NgxSpinnerService,private service:UploadFileService,
    private formBuilder: FormBuilder,
    private excelService:ExcelService) {
    /*this.form = this.formBuilder.group({
      sendnote: []
    });*/
    this.url=service.fileurl
   }

   searchresult(){
    this.spinner.show();
    //this.getData()
    this.advisnotearr=this.advisnotearr.filter(x => moment(x.UploadDate).isSameOrAfter(this.fromdate) && moment(x.UploadDate).isSameOrBefore(this.todate));
    this.spinner.hide();
  }

  ngOnInit() {
    this.getUploadedData()
  }

  checkboxaction(event,ref){
    console.log(event)
   this.chkData.push(ref)
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.advisnotearr, 'Payment Advisory Note');
  }

  getUploadedData(){
    this.spinner.show();
    this.service.getPaymentAdvisNoteHeader().subscribe(
    data=>{
      console.log(data)
      this.advisnotearr=data;
      console.log(this.advisnotearr);
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
    })
  }

  sendmail(){
    this.spinner.show();
    let ids=this.chkData;
    console.log(ids);
    this.service.sendmail(ids).subscribe(
    data=>{
      //this.advisnotearr=data; 
      for(var index in ids)
      {
        console.log(index)
      //let index1=this.advisnotearr.findIndex(o=>o.PaymentAdviceNoteHeaderID==index);
      //console.log(index1);
      //this.advisnotearr[index1].MailSendFlag='Y';
      }
      this.chkData=[];
      this.getUploadedData();
      this.spinner.hide();
    },
    error=>{
      this.chkData=[];
      this.spinner.hide();
    })
  }

}
class PaymentAdviceNote{
  PaymentAdviceNoteHeaderID;
  VendorCode;
  VendorName
  VendorContanctName
  VendorEmail
  VendorAccount
  VendorBankIFSC
  VendorBankName
  ChequeUTRNo
  MailSendFlag
  UploadDate
  InvoiceDate
}

