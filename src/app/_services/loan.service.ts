import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loan} from '../models/loan.model';
import {Loanrequest} from '../models/loanrequest.model';

const baseUrl = 'http://localhost:8080/api/loans';
const newUrl = 'http://localhost:8080/api/loanRequest';
const approveUrl = 'http://localhost:8080/api/approve';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

    //for geting token to local storage
    getToken() {
      localStorage.getItem('usertoken');
    }

    //get all loans
    getAll(): Observable<Loan[]> {
      return this.http.get<Loan[]>(baseUrl);
    }

    get(id: any): Observable<Loan> {
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }

    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
  
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByType(type: any): Observable<Loan[]> {
      return this.http.get<Loan[]>(`${baseUrl}?type=${type}`);
    }

    //send loan requests from customer board
    loanRequest(data: any): Observable<any> {
      return this.http.post(`${newUrl}/loanrequest`, data);
    }

    //get all loan requests to view in admin board
    getAllRequests(): Observable<Loanrequest[]> {
      return this.http.get<Loanrequest[]>(`${newUrl}/getloanrequests`);
    }

    //send approved loans from admin board
    approveRequest(data: any): Observable<any> {
      return this.http.post(`${approveUrl}`, data);
    }

    //get each customer's requests
    getAllOneCustomerRequests(userId: any): Observable<Loanrequest[]> {
      return this.http.get<Loanrequest[]>(`${newUrl}/getcustomerrequests/${userId}`);
    }

}
