import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Property} from 'src/app/models/property';
import {PropertiesService} from 'src/app/services/properties.service';
import {NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  propertyForm;
  property: Property;
  id: number;

  //variable for datepicker
  ngbDate: NgbDateStruct;

  constructor(private actRoute: ActivatedRoute, private propService: PropertiesService, private router: Router) {
    this.actRoute.params.subscribe(response => {
      this.id = response.id
    });
    let propertyListDate: Date = new Date();
    this.property = new Property(null, "", "", null, [], "", propertyListDate);
    this.formatDate(propertyListDate);
    if (this.id) {
      this.getProperty();
    }
  }

  ngOnInit(): void {

  }

  getProperty() {
    this.propService.getProperty(this.id).subscribe(response => {
      this.property = response;
      this.formatDate(new Date(this.property.listDate)); //for async timing
    });
  }

  onSubmit(prop: any) {
    //if multiple pics are added it converts to an array for json if it isn't an array already -- otherwise breaks display on details
    let imgArray = null;
    if (!Array.isArray(prop.images)) {
      imgArray = prop.images.split(",");
    } else {
      imgArray = prop.images;
    }
    //recreated Property instance so I could format images and reformat date for storage
    const formProp = new Property
    (
      prop.id,
      prop.address,
      prop.type,
      prop.listPrice,
      imgArray,
      prop.description,
      this.formatStorageDate(prop.listDate)
    )
    if (this.property.id == null) {
      this.createProperty(formProp);
    } else {
      this.updateProperty(formProp);
    }
  }

  deleteProperty(id: number) {
    this.propService.deleteProperty(id).subscribe();
    this.router.navigate(['/properties']);
  }

  createProperty(prop: Property) {
    this.propService.createProperty(prop).subscribe();
    this.router.navigate(['/properties']);
  }

  updateProperty(prop: Property) {
    this.propService.updateProperty(prop).subscribe();
    this.router.navigate(['/properties']);
  }

  formatDate(dt: Date) {
    const returnDate = {
      year: dt.getFullYear(),
      month: dt.getMonth() + 1,
      day: dt.getDate()
    }
    this.ngbDate = returnDate;
  }

  formatStorageDate(date: NgbDate): Date {
    let returnDate = new Date();
    returnDate.setFullYear(date.year);
    returnDate.setMonth(date.month - 1);
    returnDate.setDate(date.day);

    return returnDate;
  }
}
