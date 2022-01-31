import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  baseUrl: string = "http://localhost:8081/order";

  constructor(private http : HttpClient) { }
}