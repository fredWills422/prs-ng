export class Vendor {

    id: number;
    name: string;
    code: string;
    state: string;
    city: string;
    zip: number;
    address: string;
    email: string;
    phoneNumber: string;

    constructor(id: number=0, name:string="", code: string="",
                state: string="", city: string="", zip: number=0,
                address: string="", email: string="", phoneNumber: string="") {
        
        this.id=id;
        this.name=name;
        this.code=code;
        this.state=state;
        this.city=city;
        this.zip=zip;
        this.address=address;
        this.email=email;
        this.phoneNumber=phoneNumber;
        
    }

}
