import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proprites: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Manna House",
      "Type": "House",
      "Price": 14000
    },
    {
      "Id": 3,
      "Name": "Ombuja House",
      "Type": "House",
      "Price": 16000
    },
    {
      "Id": 4,
      "Name": "Preasles House",
      "Type": "House",
      "Price": 1000
    },
    {
      "Id": 5,
      "Name": "White House",
      "Type": "House",
      "Price": 102000
    },
    {
      "Id": 6,
      "Name": "Rai House",
      "Type": "House",
      "Price": 125000
    },
    {
      "Id": 7,
      "Name": "Parui House",
      "Type": "House",
      "Price": 16000
    }
  ]

}
