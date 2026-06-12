import {Schema, model, models, Document} from "mongoose";

export interface User {
    username : String;
    email : String;
    password: String;
}