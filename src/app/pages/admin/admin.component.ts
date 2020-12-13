import {Component, OnInit} from '@angular/core';
import {Property} from 'src/app/models/property';
import {PropertiesService} from 'src/app/services/properties.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  properties: Property[];
  //these following variables are for the statistics
  maxPrice: number;
  minPrice: number = 0;
  averagePrice: number = 0;
  propCount: number;

  constructor(private propsService: PropertiesService) {
    this.getProperties();
  }

  ngOnInit(): void {

  }

  getProperties() {
    this.propsService.getProperties().subscribe(response => {
      this.properties = response;
      //placed these next statements in here to get out of async timing failure
      this.propCount = this.properties.length;
      this.getStats();
    })
  }

  //calculates highest listing price
  calcMax() {
    let max = 0;
    for (let property of this.properties) {
      if (property.listPrice > max) {
        max = property.listPrice;
      }
    }
    this.maxPrice = max;
  }

  //calculates lowest listing price
  calcMin() {
    let min = this.maxPrice;
    for (let property of this.properties) {
      if (property.listPrice != null) { //double checking values before using to avoid nulls
        if (property.listPrice < min) {
          min = property.listPrice;
        }
      }
    }
    this.minPrice = min;
  }

  //calculates average price of properties -- depending on integrity of the db data this may only be approximate
  calcAverage() {
    let sum = 0;
    for (let property of this.properties) {
      if (property.listPrice != null && property.listPrice != undefined) { //double checking values before using to avoid nulls, undefined nums, or string concats
        sum = (sum + Number(property.listPrice));
      }
    }
    let avg = Math.floor((sum / this.propCount)); //ensuring it doesn't return an exponent js number
    this.averagePrice = avg;
  }

  //method calls the methods to get the statistics
  getStats() {
    this.calcMax();
    this.calcMin();
    this.calcAverage();
  }

}
