import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    public month: number = new Date().getMonth();
    public fullYear: number = new Date().getFullYear();
    public startDate: Date = new Date(this.fullYear, this.month - 1 , 7);
    public endDate: Date = new Date(this.fullYear, this.month, 25);
    public address: Object;

  getAddress(place: object) { 
   this.address = place['formatted_address'];
   }

  constructor() { }

  ngOnInit(): void {
  }

}
