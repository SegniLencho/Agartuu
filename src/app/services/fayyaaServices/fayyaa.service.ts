import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FayyaaService {



  constructor(private http: HttpClient) { }
  getCovidData(url) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', 'covid-19-data.p.rapidapi.com');
    headers = headers.append('x-rapidapi-key', 'NrSdMbPFiXmsh4rjP0piW2MNooNSp1Y3ll2jsneihfW44LWp8G');


return this.http.get(url,{ headers: headers});

    // return new Promise((resolve, reject) => {
    //   this.http
    //     .get(url,{ headers: headers})
    //     .subscribe(response => {
    //       console.log("joke loading complete")
    //       resolve(true);
    //     })
    // });
  }

}

