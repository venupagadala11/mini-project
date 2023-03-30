import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
formStatus:boolean=true;

  portability = new FormGroup({
    userName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(255)])),
    mobileNumber: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])),
    email: new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]))
  });

  constructor(){}
  handleFormSubmit()
  {
    this.formStatus=true;
   
    
    console.log('submit')
  }

  get userName()
  {
    return this.portability.get('userName')
  }
  get email()
  {
    return this.portability.get('solids')
  }
 
  get mobileNumber()
  {
    return this.portability.get('mobileNumber')
  }
}
