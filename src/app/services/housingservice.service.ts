import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../property/Iproperty.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingserviceService {

  constructor(private http: HttpClient) { }

  // getAllPropertices()
  // {
  //   return this.http.get<Iproperty[]>('data/properties.json');
  // }

  getAllPropertices(SellRent: number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<Iproperty> = [];

      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    );
  }
}
