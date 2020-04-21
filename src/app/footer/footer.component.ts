import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  backToTop:any ="none";

  constructor() { }

  ngOnInit() {
  }

//Get the button:

// When the user scrolls down 20px from the top of the document, show the button
@HostListener('window:scroll', ['$event']) onScrollEvent($event){
  this.scrollFunction();
} 




 scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    this.backToTop = "block";
  } else {
    this.backToTop = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
 topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
}

