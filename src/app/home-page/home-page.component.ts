import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('tw2') typewriterElement2: Typewriter;
  @ViewChild('tw3') typewriterElement3: Typewriter;

  constructor() { }   

  ngOnInit() {
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
  
  }

}
