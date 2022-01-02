import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertyBase';

@Injectable({
  providedIn: 'root'
})
export class HousingserviceService {

  constructor(private http: HttpClient) { }

  // getAllPropertices()
  // {
  //   return this.http.get<Iproperty[]>('data/properties.json');
  // }

  getAllPropertices(SellRent: number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<IPropertyBase> = [];

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
