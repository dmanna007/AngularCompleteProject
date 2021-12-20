import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../property/Iproperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingserviceService {

  constructor(private http: HttpClient) { }

  getAllPropertices()
  {
    return this.http.get<Iproperty[]>('data/properties.json');
  }
}
