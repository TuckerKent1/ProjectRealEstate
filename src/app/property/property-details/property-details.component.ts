import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Property} from 'src/app/models/property';
import {PropertiesService} from 'src/app/services/properties.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  id: number;
  property: Property;

  constructor(private route: ActivatedRoute, private propService: PropertiesService, private carouselConfig: NgbCarouselConfig) {
    this.route.params.subscribe(response => {
      this.id = response.id;
    })

    //carousel configuration options
    carouselConfig.animation = true;
    carouselConfig.interval = 5000;
    carouselConfig.keyboard = true;
    carouselConfig.pauseOnHover = true;
    carouselConfig.pauseOnFocus = true;
    carouselConfig.showNavigationIndicators = true;
    carouselConfig.showNavigationArrows = true;
    carouselConfig.wrap = true;

    //sets property to avoid errors in display
    this.property = new Property(null, "", "House", null, [], "", new Date());
  }

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.propService.getProperty(this.id).subscribe(response => {
      this.property = response;
    })
  }
}
