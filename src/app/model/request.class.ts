import { User } from './user.class';

export class Request{

    id: number;
    user: User;
    description: string;
    submittedDate: Date;
    dateNeeded: Date;
    justification: string;
    status: string;
    total: number;
    deliveryMode: string;
    reasonForRejection: string;

    constructor(id:number = 0, user:User = null, description:string = "",
                submittedDate:Date = null, dateNeeded:Date = null, justification:string = "",
                status:string = "", total:number = 0, deliveryMode:string = "",
                reasonForRejection:string = "") {
        
        this.id=id;
        this.user=user;
        this.description=description;
        this.submittedDate=submittedDate;
        this.dateNeeded=dateNeeded;
        this.justification=justification;
        this.status=status;
        this.total=total;
        this.deliveryMode=deliveryMode;
        this.reasonForRejection=reasonForRejection;
        
    }

}
