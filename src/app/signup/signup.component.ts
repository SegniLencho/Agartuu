import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MustMatch } from '../validate/mustMatch';
import { CommentServiceService } from '../services/comment-service.service';
import { AlertServicesService } from '../services/alert-services.service';
import { text } from 'express';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private commentService: CommentServiceService, private alertService:AlertServicesService) { }

  singUpUrl = "http://localhost:8083/afroteck/signup"

  signUp = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.minLength(6)],
    confirmPassword: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signUp.valid) {
      this.commentService.createUserSignUp(this.singUpUrl, this.signUp.value)
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUp.value)bontudefa11@gmail.com
      
      
    }
    else {
      this.validateAllFormFields(this.signUp)
    }
  }
  get myForm() {
    return this.signUp.controls;
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


}
