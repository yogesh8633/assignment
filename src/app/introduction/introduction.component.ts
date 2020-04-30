import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/services/storage/registration/registration.service';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  providers:[RegistrationService]
})
export class IntroductionComponent implements OnInit {
  currentUser = JSON.parse(sessionStorage.factomaniaId);
  constructor(private _registrationService: RegistrationService ) { }

  ngOnInit() {
    this._registrationService.getUserById(this.currentUser).subscribe(data=>{
      console.log(data);
    })
  }

}
