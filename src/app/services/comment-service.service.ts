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
  myAccesstokens = null;

  public token: Token;
  access_toke: string;
  constructor(private http: HttpClient, private alertService: AlertServicesService) { }
  createComment(url: string, comment: UserComment) {
    return this.http.post<UserComment[]>(url, comment).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  checkOut(url: string, data: string) {
    this.getTokens().subscribe(datas => {
      this.access_toke = datas.access_token
      let headers = new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer ' + datas.access_token
      });
      this.http.post(url, data, { headers: headers }).subscribe(data => this.alertService.showSuccess(data.toString(), "Your order is placed"),
      );
    })



  }

  getCustomerComment(url: string) {
    this.getTokens().subscribe(data => this.saveToken(data));
    let access_token = localStorage.getItem("tokens");
    let headers = new HttpHeaders({

      'Authorization': 'bearer ' + access_token
    });

    return this.http.get<UserComment>(url, { headers: headers }).pipe(
      retry(1),
      catchError(this.handleError)
    )

  }
  public getTokens() {
    let params = new URLSearchParams();
    params.append('username', 'anaam@yahho.com');
    params.append('password', 'password');
    params.append('grant_type', 'password');
    let headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa("devglan-client:devglan-secret")
      });

    return this.http.post<Token>('http://localhost:8083/oauth/token', params.toString(), { headers: headers })

  }
  saveToken(data) {
    this.token = Object.assign({}, data);
    localStorage.setItem("tokens", this.token.access_token);
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
  createUserSignUp(url: string, data) {

    this.getTokens().subscribe(datas => {
      this.access_toke = datas.access_token
      let headers = new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer ' + datas.access_token
      });
      this.http.post(url, data, { headers: headers }).subscribe(data => this.alertService.showSuccess(data.toString(), "Wel come"),
      );
    })
  }
}

