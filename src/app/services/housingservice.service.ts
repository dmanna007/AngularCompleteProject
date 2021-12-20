import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingserviceService {

  constructor(private http: HttpClient) { }

  getAllPropertices()
  {
    return this.http.get('data/properties.json');
  }
}
