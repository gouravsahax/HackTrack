import {Schema, model, models, Document} from "mongoose";

export interface User {
    username : String;
    email : String;
    password: String;
    college : String;
    city : String;
    state : String;
    gender : String;
}

const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    college: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    
})

const User = models.User || model('User', userSchema);
export default User;