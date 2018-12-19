import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
  };

  constructor( private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(`${environment.apiTest}/customer_product`).pipe(timeout(27000));
  }
}
