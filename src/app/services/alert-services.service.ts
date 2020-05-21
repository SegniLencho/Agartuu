import { ToastrManager } from 'ng6-toastr-notifications';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertServicesService {

  constructor(public toastr: ToastrManager) {
  }
  showSuccess(message: string, messsageHeader: string) {
    this.toastr.successToastr(messsageHeader, message);
  }
  showError(message: string, messsageHeader: string){
    this.toastr.errorToastr("Ammaaf bituu hin dandeessani","Nu hofkalchaa");
  }
  showCatchedError(message: string, messsageHeader: string){
    this.toastr.errorToastr(message,messsageHeader);
  }

}
