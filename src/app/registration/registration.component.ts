import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import Typewriter from 't-writer.js';
import { RegistrationService } from 'src/services/storage/registration/registration.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[RegistrationService]
})
export class RegistrationComponent implements OnInit {
  factomaniaId:any;

  registrationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router, private _registrationService: RegistrationService) { }

  @ViewChild('tw2') typewriterElement2: Typewriter;
  @ViewChild('tw3') typewriterElement3: Typewriter;

  ngOnInit() {
    this.factomaniaIdGenerator();

    const target2 = this.typewriterElement2.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;
    // const target = this.typewriterElement.nativeElement

    const writer2 = new Typewriter(target2, {
      typeColor: 'green'
    })
    const writer3 = new Typewriter(target3, {
      typeColor: 'red'
    })

    writer2
      .type('If You are curious')
      .removeCursor()
      .rest(500)
      .then(writer3.start.bind(writer3))
      .start()

    writer3
      .type("-We are here")
      .rest(1000)
      .clear()
      .then(writer2.start.bind(writer2))
      .removeCursor()

    this.registrationForm = this.formBuilder.group({
      'factomaniaId':[this.factomaniaId, Validators.required],
      'firstname': ['Manisha', Validators.required],
      'lastname': ['Gupta', Validators.required],
      'dob': [null, Validators.required],
      'email': ['manishagupta9016@gmail.conm', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      'password': ['mani', Validators.required],
      'mobile': [9716718367, Validators.required],
      'fav': ['Animals', Validators.required],
      'gender': ['Female', Validators.required]

    });
  }
  factomaniaIdGenerator() {
    this.factomaniaId = "FACTOMANIA" + new Date().getTime().toString().slice(5, 14);
    console.log("factomaniaId>>>>> ", this.factomaniaId);
}
  registration(){
    this._registrationService.registration(this.registrationForm.value).subscribe(data=>{
      Swal.fire({
        icon: 'success',
        title: 'You are successfully registered',
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        },
        allowOutsideClick: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK!',
  
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/login']);
        }
      });
        })
  }
}
