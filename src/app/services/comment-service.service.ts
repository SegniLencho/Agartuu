import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserComment } from '../model/user-comment';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AlertServicesService } from './alert-services.service';
import { Token } from '../model/token'

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  public token: Token;
  constructor(private http: HttpClient, private alertService: AlertServicesService) { }
  createComment(url: string, comment: UserComment) {
    return this.http.post<UserComment[]>(url, comment).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCustomerComment(url: string) {
  this.getToken().subscribe(data=>this.saveToken(data));
  let access_token=localStorage.getItem("tokens");
  let headers =   new HttpHeaders({

    'Authorization': 'bearer ' + access_token });

    return this.http.get<UserComment>(url,{ headers: headers}).pipe(
      retry(1),
      catchError(this.handleError)
    )

  }
  getToken() {
    let params = new URLSearchParams();
    params.append('username', 'Alex123');
    params.append('password', 'password');
    params.append('grant_type', 'password');
    let headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa("devglan-client:devglan-secret")
      });

   return this.http.post('https://segni-cloud-274217.uc.r.appspot.com/oauth/token', params.toString(), { headers: headers });
  

  }
  saveToken(data) {
    this.token = Object.assign({}, data);
    localStorage.setItem("tokens",this.token.access_token);
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = '${error.error.message}';
    } else {
      // server-side error
      errorMessage = `Eror code: ${error.status}\nErgaa dogoggoraa: ${error.message}`;
    }
    console.log('Some Error occured', errorMessage)
    return throwError(errorMessage);
  }
}

