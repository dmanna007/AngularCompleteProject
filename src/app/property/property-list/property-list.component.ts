import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertyBase';
import { HousingserviceService } from 'src/app/services/housingservice.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  proprites: Array<IPropertyBase> = [];

  constructor(private route: ActivatedRoute, private services: HousingserviceService) { }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }

    this.services.getAllPropertices(this.SellRent).subscribe(
      data => {
        this.proprites = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      }, error => {
        console.log(error);
      }
    );
  }
}
