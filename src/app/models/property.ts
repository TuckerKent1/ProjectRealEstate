export class Property {

  /*
      Basic model for a property -- in hind sight I could have added quite a few
      fields, but I felt as though these fields were encompassing enough for this
      purpose.
  */

  id: number;
  address: string;
  type: string;
  listPrice: number;
  images: string[];
  description: string;
  listDate: Date;

  constructor
  (
    id: number,
    address: string,
    type: string,
    listPrice: number,
    images: string[],
    description: string,
    listDate: Date
  ) {
    this.id = id;
    this.address = address;
    this.type = type;
    this.listPrice = listPrice;
    this.images = images;
    this.description = description;
    this.listDate = listDate;
  }

}
