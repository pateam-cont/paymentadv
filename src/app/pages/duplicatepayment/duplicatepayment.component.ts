import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-duplicatepayment',
  templateUrl: './duplicatepayment.component.html',
  styleUrls: ['./duplicatepayment.component.css']
})
export class DuplicatepaymentComponent implements OnInit {
  duplicateRecordsArr:PaymentAdviceHistoryDup[]=[]
  itemsPerPage=10
  constructor(private service:UploadFileService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.getPaymentHistoryDup().subscribe(data=>{
      this.duplicateRecordsArr=data;
      console.log(this.duplicateRecordsArr);
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
    });
  }

  

}

class PaymentAdviceHistoryDup{
  PaymentAdviceHistoryDupID;
CompanyCode;
PaymentRefNumber;
VendorCode;
VendorName;
PaymentType;
PaymentMode;
SpecialGLEntries;
PaymentBlock;
InvoiceNumber;
InvoiceDate;
PaymentBookingNumber;
PaymentDate;
PaymentDueDate;
PaymentPaidAmount;
PaymentCurrency;
InvoiceAmount;
InvoiceCurrency;
TargertPartner;
PaymentText;
DocText;
CompanyDivision;
VendorContanctName;
VendorAddress1;
VendorAddress2;
VendorAddress3;
VendorState;
VendorAddrPin;
PaidAmount;
PaymentBookingPrefix;
PaymentBookingSeqNbr;
PayableAmount;
VendorBankName;
VendorBankAccount;
VendorBankIFSC;
VendorBankBranch;
VendorBankLocation;
VendorBankSwiftCode;
VendorEmail;
CompanyBankAccount;
VendorAlternateEmailID;
VendorAlternatePhone;
RecordSource;
PayNoticeGenerated;
IsDuplicateMarked;
IsReconcile;
Remark;
TableType;
BatchRunID;
AMHSRC;
}
