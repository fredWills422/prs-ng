export class Product {
    
    id: number;
    vendorId: number;
    name: string;
    partNumber: string;
    unit: number;
    price: number;
    photoPath: string;

    constructor(id: number=0, vendorId: number=0, name: string="",
                partNumber: string="", unit: number=0, price: number=0,
                photoPath: string="") {
        
        this.id=id;
        this.vendorId=vendorId;
        this.name=name;
        this.partNumber=partNumber;
        this.unit=unit;
        this.price=price;
        this.photoPath=photoPath;
        
    }
    
}
