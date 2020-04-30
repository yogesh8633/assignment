import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {world_history} from './courses';
@Component({
  selector: 'app-world-history',
  templateUrl: './world-history.component.html',
  styleUrls: ['./world-history.component.scss']
})

export class WorldHistoryComponent implements OnInit {

  title = 'Business and Economy';
  animationDirection: 'left' | 'right' | 'none';
  organizationColor: any;
  mockColor: any;
  socialColor: any;
  paymentColor: any;
  contactColor: any;
  sesColor:any;
  programColor:any;
  organizationTextColor: any;
  mockTextColor: any;
  socialTextColor: any;
  paymentTextColor: any;
  contactTextColor: any;
  sesTextColor:any;
  programTextColor:any;

  constructor(        private _changeDetectorRef: ChangeDetectorRef,
    ) { 
       // Set the defaults
   
  }

  ngOnInit() {
this.businessenonomy();
    
  }
 
/**
     * Organization Info
     */
    businessenonomy(): void{
      this.title = 'Business and Economy';
      this.organizationColor = " #75f34b";
      this.organizationTextColor = "white";
      this.mockTextColor = "black";  
      this.sesTextColor = "black";
      this.socialTextColor = "black";
      this.paymentTextColor = "black";
      this.programTextColor = "black";
      this.contactTextColor = "black";
      this.mockColor = "white";  
      this.sesColor = "white";
      this.socialColor = "white";
      this.paymentColor = "white";
      this.programColor = "white";
      this.contactColor = "white";
      this.mockColor = "white";  
  }
   /**
   * Mock Test
   */
  crimelaw(): void{
      this.title = 'Crime and Law';
      this.organizationColor = "white";
      this.organizationTextColor = "black";
      this.mockTextColor = "white";  
      this.sesTextColor = "black";
      this.socialTextColor = "black";
      this.paymentTextColor = "black";
      this.programTextColor = "black";
      this.contactTextColor = "black";
      this.sesColor = "white";
      this.socialColor = "white";
      this.paymentColor = "white";
      this.programColor = "white";
      this.contactColor = "white";
      this.mockColor = "#75f34b";
  }
  /**
   * SES Credential
   */
  history(): void{
      this.title = "History"
      this.organizationColor = "white";
      this.organizationTextColor = "black";
      this.mockTextColor = "black";  
      this.sesTextColor = "white";
      this.socialTextColor = "black";
      this.paymentTextColor = "black";
      this.programTextColor = "black";
      this.contactTextColor = "black";
      this.sesColor = "#75f34b";
      this.socialColor = "white";
      this.paymentColor = "white";
      this.programColor = "white";
      this.contactColor = "white";
      this.mockColor = "white";
  }
  /**
   * Social Login
   */
  holidaysevents(): void{
      this.title = "Holidays and Events"
      this.organizationColor = "white";
      this.organizationTextColor = "black";
      this.mockTextColor = "black";  
      this.sesTextColor = "black";
      this.socialTextColor = "white";
      this.paymentTextColor = "black";
      this.programTextColor = "black";
      this.contactTextColor = "black";
      this.sesColor = "white";
      this.socialColor = "#75f34b";
      this.paymentColor = "white";
      this.programColor = "white";
      this.contactColor = "white";
      this.mockColor = "white";
  }
   /**
   * Contact Us
   */
  religion(): void{
      this.title = "Religion"
      this.organizationColor = "white";
      this.organizationTextColor = "black";
      this.mockTextColor = "black";  
      this.sesTextColor = "black";
      this.socialTextColor = "black";
      this.paymentTextColor = "black";
      this.programTextColor = "black";
      this.contactTextColor = "white";
      this.sesColor = "white";
      this.socialColor = "white";
      this.paymentColor = "white";
      this.programColor = "white";
      this.contactColor = "#75f34b";
      this.mockColor = "white";
  }
  /**
   * Payment Gateway
   */
  traveltourism(): void{
      this.title = "Travel and Tourism"
      this.organizationColor = "white";
      this.organizationTextColor = "black";
      this.mockTextColor = "black";  
      this.sesTextColor = "black";
      this.socialTextColor = "black";
      this.paymentTextColor = "white";
      this.programTextColor = "black";
      this.contactTextColor = "black";
      this.sesColor = "white";
      this.socialColor = "white";
      this.paymentColor = "#75f34b";
      this.programColor = "white";
      this.contactColor = "white";
      this.mockColor = "white";
  }
 

 
}
