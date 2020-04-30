import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from 'src/services/storage/storage.service';
import { LoginService } from 'src/services/storage/login/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      factomaniaId: ['', [Validators.required]],
      password: ['', Validators.required]

    })
  }
  // submit() {
  //   this.loginService.login(this.loginForm.value).subscribe(data => {
  //     if (data.status === "success") {
  //       StorageService.setItem("factomaniaId", this.loginForm.value.factomaniaId);
  //       this.router.navigate(['/introduction']);
  //     }
  //     else {
  //       Swal.fire({
  //         icon: 'warning',
  //         title: 'Incorrect Username or Password',
  //         showClass: {
  //           popup: 'animated fadeInDown faster'
  //         },
  //         hideClass: {
  //           popup: 'animated fadeOutUp faster'
  //         },
  //         allowOutsideClick: false,
  //         confirmButtonColor: '#3085d6',
  //         confirmButtonText: 'OK!',

  //       })
  //     }

  //   })
  // }
submit()
{ if(this.loginForm.value.factomaniaId === 'admin' )
  {  StorageService.setItem("factomaniaId", this.loginForm.value.factomaniaId);
    this.router.navigate(['/introduction']);}
  else {
  Swal.fire({
            icon: 'warning',
            title: 'Incorrect Username or Password',
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            },
            allowOutsideClick: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK!',
  
          })
        }
}
}   


