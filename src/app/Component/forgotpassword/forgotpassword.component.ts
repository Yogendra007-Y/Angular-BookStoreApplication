import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  passwordResetForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.passwordResetForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],   
    });
  }
  onSubmit(){
    this.router.navigate(["/resetPassword"])
  }
}
