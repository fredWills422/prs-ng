export class User {

    id: number;
    userName: string;
    email: string;
    firstName: string;
    admin: boolean;
    reviewer: boolean;
    lastName: string;
    password: string;
    phone: string;

    constructor(id: number=0, userName: string="", email: string="",
                firstName: string="", admin: boolean=null, reviewer: boolean=null,
                lastName: string="", password: string="", phone: string="") {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.admin = admin;
        this.reviewer = reviewer;
        this.lastName = lastName;
        this.password = password;
        this.phone = phone;
    }

}