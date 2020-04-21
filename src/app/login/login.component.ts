import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;
   constructor(private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:[null],
      password:[null] 
     })
     }
}
