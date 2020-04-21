import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
}) 
export class HeaderComponent implements OnInit {
  today: number = Date.now();

  constructor() { }


  ngOnInit(): void {
    setInterval(() => {this.today = Date.now()}, 1);

}

}
