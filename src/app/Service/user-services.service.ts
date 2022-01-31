import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule } from '../model/user/user';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  
  baseUrl: string = "http://localhost:8081/userregistrationservice"

  constructor(private httpClient: HttpClient) { }
  
  registerUser(UserModule:UserServicesService):Observable<UserModule>{
    return this.httpClient.post<UserModule>(`${this.baseUrl}/registration`, UserModule);
  }
logIn(credentials:any){
  return this.httpClient.post(`${this.baseUrl}/userlogin`,credentials,)
}

logInUser(token: string){
  localStorage.setItem("token",token,);
  return true;
}
}