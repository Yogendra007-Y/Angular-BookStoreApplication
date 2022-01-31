import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../Service/user-services.service';
import { UserModule } from '../model/user/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // userModule:UserServicesService = new UserModule();

  constructor(private service:UserServicesService, private router:Router) { }

  ngOnInit(): void {
  }

registerUser(){
this.service.registerUser(this.userModule).subscribe(
data=>{this.userModule= data, this.router.navigate(['/login'])},
error=>(console.log(error))
      );
    }
  }

