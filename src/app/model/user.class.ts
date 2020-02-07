export class User {

    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    admin: boolean;
    reviewer: boolean;
    email: string;
    phone: string;

    constructor(id: number=0, userName: string="", email: string="",
                firstName: string="", admin: boolean=null, reviewer: boolean=null,
                lastName: string="", password: string="", phone: string="") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.admin = admin;
        this.reviewer = reviewer;
        this.email = email;
        this.phone = phone;
    }

}