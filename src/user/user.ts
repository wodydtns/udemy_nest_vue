import {Entity} from "typeorm"

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    is_ambassador:boolean;
}