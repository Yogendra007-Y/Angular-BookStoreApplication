import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from './model/user/bookDetails';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  baseUrl: string = "http://localhost:8081/bookservice";

  constructor(private http : HttpClient) { }

  getAllBooks() {
    return this.http.get<[BookDetails]>(`${this.baseUrl}/getbooks`,{headers: new HttpHeaders({token: localStorage['token']})});
  }

  getBookById(id: number):Observable<BookDetails>{
    return this.http.get<BookDetails>(`${this.baseUrl}/getbook/${id}`);
  }


  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}