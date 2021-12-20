import { Component, OnInit } from '@angular/core';
import { HousingserviceService } from 'src/app/services/housingservice.service';
import { Iproperty } from '../Iproperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private services:HousingserviceService) { }

  proprites: Array<Iproperty> =[];

  ngOnInit(): void {

    this.services.getAllPropertices().subscribe(
      data => {
        this.proprites = data;
        console.log(data);
      }, error => {
      console.log(error);
      }
      );
  }




}
