import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from  'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders()
};
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  env='dev';
  baseurl=""
  url
  fileurl="https://krios.azurewebsites.net/"
  
  constructor(private http: HttpClient) { 
    this.baseurl=this.env=="dev"?"https://localhost:44314/":"https://krios.azurewebsites.net/";
    this.url=this.baseurl+"api/FileUpload/";
    this.fileurl=this.baseurl+"";
    console.log(this.url)
  }

  uploadfile(filetype,fileToUpload):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('type',filetype);
    return this.http.post(this.url+"uploadfile",formData,httpOptions)
  }

  getuploadfilehistory():Observable<any>{
    console.log(this.url+"getuploadfilehistory");
    return this.http.get(this.url+"getuploadfilehistory",httpOptions)
  }

  getPaymentHistoryDup():Observable<any>{
    return this.http.get(this.url+"GetPaymentAdviceHistoryDup",httpOptions);
  }

  GetGeneratePaymentAdvanceNote():Observable<any>{
    return this.http.get(this.url+"GetGeneratePaymentAdvanceNote",httpOptions);
  }

  GeneratePaymentAdvanceNote():Observable<any>{
    return this.http.get(this.url+"GeneratePaymentAdvanceNote",httpOptions);
  }

  getVendorList():Observable<any>{
    return this.http.get(this.url+"GetVendorMaster",httpOptions);
  }

  getPaymentAdvisNoteHeader():Observable<any>{
    return this.http.get(this.url+"getPaymentAdvisNoteHeader",httpOptions);
  }

  getDuplicatePayment():Observable<any>{
    return this.http.get(this.url+"GetDuplicatePaymentHistory",httpOptions);
  }

  GetBankPaymentsAdviceNotePending():Observable<any>{
    return this.http.get(this.url+"GetBankPaymentsAdviceNotePending",httpOptions);
  }

  GetSAPBPCSAdviceNotePending():Observable<any>{
    return this.http.get(this.url+"GetSAPBPCSPending",httpOptions);
  }

  Login(username:string,password:string):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password',btoa(password));
    console.log(btoa(password))
    return this.http.post(this.url+"Login",formData,httpOptions)
  }

  sendmail(ids:string[]):Observable<any>{
    const formData: FormData = new FormData();
    let idsarr=JSON.stringify(ids);
    console.log(idsarr)
    formData.append('ids', idsarr);
    return this.http.post(this.url+"sendmail",formData,httpOptions)
  }

  saveVendorInfo(vendorid:number,mailid:string):Observable<any>{
    const formData: FormData = new FormData();
    formData.append('vendorid', vendorid.toString());
    formData.append('mailid', mailid);
    return this.http.post(this.url+"editVendor",formData,httpOptions)
  }


}
