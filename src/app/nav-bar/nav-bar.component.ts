import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userLoggedin: string;

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedin() {
    this.userLoggedin = localStorage.getItem('token');
    return this.userLoggedin;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.success("Log out successfully");
  }

}
