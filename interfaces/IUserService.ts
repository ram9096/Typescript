import type { IUser } from "./IUser.js";

export interface IUserService{
    register(user:IUser):void;
    getStudent():IUser[];
}
