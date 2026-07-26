import type { IUser } from "./IUser.js";

export interface IUserRepository{
    add(user:IUser):void;
    getAll():IUser[];
    findById(id:number):IUser|undefined;
}

