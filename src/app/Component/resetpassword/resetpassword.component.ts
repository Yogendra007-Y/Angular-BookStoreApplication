import { Component, OnInit } from '@angular/core';
import { ResetPassword } from 'src/app/model/user/resetPassword-model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword: ResetPassword = new ResetPassword();
  constructor() { }

  ngOnInit(): void {
  }

}