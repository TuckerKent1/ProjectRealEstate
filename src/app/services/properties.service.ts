import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Property} from '../models/property';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  propertyURL: string;

  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) {
    //provided url in environment
    this.propertyURL = environment.apiBaseURL + "properties";
  }

  //http GET specific property
  getProperty(id: number): Observable<Property> {
    return this.http.get<Property>(this.propertyURL + "/" + id);
  }

  //http GET all properties
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.propertyURL);
  }

  //http POST create
  createProperty(prop: Property) {
    return this.http.post<Property>(this.propertyURL, JSON.stringify(prop), this.options);
  }

  //http PUT update
  updateProperty(prop: Property) {
    return this.http.put<Property>(this.propertyURL + "/" + prop.id, JSON.stringify(prop), this.options);
  }

  //http DELETE
  deleteProperty(id: number) {
    return this.http.delete<Property>(this.propertyURL + "/" + id, this.options);
  }
}
