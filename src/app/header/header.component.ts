import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
}) 
export class HeaderComponent implements OnInit {
  alreadyLogin:boolean = false;
  today: number = Date.now();

  constructor( private router:Router) { }


  ngOnInit(): void {
    if (StorageService.getItem('factomaniaId')) {
      this.alreadyLogin = true;
    }
    setInterval(() => {this.today = Date.now()}, 1);

}
logout(){
  StorageService.clearAll();
  this.alreadyLogin = false;
  this.router.navigate(['/login']);
  
}

header(){
  
    Swal.fire({
      icon: 'error',
      title: 'You are not logged in',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      allowOutsideClick: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK!',

    })
}
}
