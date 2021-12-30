import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from '../Iproperty.Interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('FormTabs') FormTabs?: TabsetComponent;

  //Will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  readyToMove: Array<string> = ['Yes', 'No'];
  gatedCommunity: Array<string> = ['Yes', 'No'];
  mainEntrance: Array<string> = ['East', 'West', 'South', 'North'];

  propertyView: Iproperty = {
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    PType: null
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    //console.log(Form);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.FormTabs?.tabs[tabId]) {
      this.FormTabs.tabs[tabId].active = true;
    }
  }

}
