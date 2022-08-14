import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiKey = 'acf38f97bamshfe34d9cd3ea5a27p16a3cdjsne771ac4d1c85';
const apiHost = 'covid-193.p.rapidapi.com';

const googleApiKey = 'AIzaSyC_7iwgu6EUKzZBEjIWJw3IXa2eDoSxdH8';



@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  private getHeaders(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', `${apiHost}` )
    headers = headers.append('x-rapidapi-key', `${apiKey}` )

    return headers;
  }

  getAllData() : Observable <any> {
    const reqUrl = this.baseUrl + 'statistics';
    return this.http.get<any>(reqUrl, { headers: this.getHeaders() } );
  }

  // getChartData() : Observable <any> {
  //   const reqUrl = this.baseUrl + 'statistics'
  //   return this.http.get<any>(reqUrl, { headers: this.getHeaders() } );
  // }

}

