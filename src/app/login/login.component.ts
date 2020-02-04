import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup: FormGroup;
  post:string;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }


//   getError(el) {
//     switch (el) {
//       case 'user':
//         if (this.formGroup.get('username').hasError('required')) {
//           return 'Username required';
//         }
//         break;
//       case 'pass':
//         if (this.formGroup.get('password').hasError('required')) {
//           return 'Password required';
//         }
//         break;
//       default:
//         return '';
//     }
//   }

  onSubmit(post) {
    this.post = post;
    console.log(post)
    if( this.post['username'] === "user" ){
      console.log('hello');
      this.router.navigate(['/tables']);
    }
  }
  hide = true;
}