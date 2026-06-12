import mongoose from "mongoose";
import {type} from "node:os";

const MONGODB_URI : string | undefined = process.env.MONGODB_URI;

export default async function connectDB(): Promise<void> {
    await mongoose.connect(MONGODB_URI!);
}



