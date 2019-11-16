import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/upload-file.service';
import { ExcelService } from 'src/app/excel.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
@Component({
  selector: 'app-pendingrecords',
  templateUrl: './pendingrecords.component.html',
  styleUrls: ['./pendingrecords.component.css']
})
export class PendingrecordsComponent implements OnInit {
  arr:SAPBPCSPending[]=[]
  itemsPerPage=10
  searchText;
  fromdate;
  todate;
  constructor(private service:UploadFileService,private spinner:NgxSpinnerService
    ,private excelService:ExcelService) { }

    ngOnInit() {
      //this.fromdate=moment();
      this.getData()
    }

    searchresult(){
      this.spinner.show();
      //this.getData()
      this.arr=this.arr.filter(x => moment(x.UploadDate).isSameOrAfter(this.fromdate) && moment(x.UploadDate).isSameOrBefore(this.todate));
      this.spinner.hide();
    }
  
    exportAsXLSX():void {
      this.excelService.exportAsExcelFile(this.arr, 'SAP/BPCS Pending Notes');
    }

    getdate(event,type){
      console.log(event)
      var d=new Date(event);
      if(type == 1){
        this.fromdate=d;
      }
      else{
        this.todate=d;
      }
      console.log(this.fromdate)
    }
  
    getData(){
      this.spinner.show();
      this.service.GetSAPBPCSAdviceNotePending().subscribe(
      data=>{
        this.arr=data;
        console.log(this.arr);
        this.spinner.hide();
      },
      error=>{
        this.spinner.hide();
      })
    }

}

class SAPBPCSPending{
  VendorCode;
  VendorName;
  RecordSource;
  PaymentRefNumber;
  PaymentBookingNumber;
  CompanyCode;
  PaymentDate;
  UploadDate;
}
