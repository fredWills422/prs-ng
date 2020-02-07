export class Vendor {

    id: number;
    name: string;
    code: string;
    state: string;
    city: string;
    zip: number;
    address: string;
    email: string;
    phone: string;

    constructor(id: number=0, name:string="", code: string="",
                state: string="", city: string="", zip: number=0,
                address: string="", email: string="", phone: string="") {
        
        this.id=id;
        this.name=name;
        this.code=code;
        this.state=state;
        this.city=city;
        this.zip=zip;
        this.address=address;
        this.email=email;
        this.phone=phone;
        
    }

}
