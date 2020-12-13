import {Component, OnInit} from '@angular/core';
import {Property} from 'src/app/models/property';
import {PropertiesService} from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent implements OnInit {

  properties: Property[];

  //pagination variables
  collectionSize: number;
  page: number;
  pageSize: number;

  constructor(private propService: PropertiesService) {
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit(): void {
    this.getProps();
  }

  getProps() {
    this.propService.getProperties().subscribe(response => {
      this.properties = response;
      this.collectionSize = this.properties.length; //for async timing
    });
  }
}
