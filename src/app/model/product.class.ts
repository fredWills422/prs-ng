import { Vendor } from './vendor.class';

export class Product {
    
    id: number;
    vendor: Vendor;
    name: string;
    partNumber: string;
    unit: number;
    price: number;
    photoPath: string;

    constructor(id: number=0, vendor: Vendor=null, name: string="",
                partNumber: string="", unit: number=0, price: number=0,
                photoPath: string="") {
        
        this.id=id;
        this.vendor=vendor;
        this.name=name;
        this.partNumber=partNumber;
        this.unit=unit;
        this.price=price;
        this.photoPath=photoPath;
        
    }
    
}
