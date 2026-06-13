import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import User from "@/database/user_model";

export async function POST(request: Request) {
    try {
        await connectDB();

        const data = await request.formData();

        let user;

        try {
            user = Object.fromEntries(data.entries());
        } catch (err) {
            return NextResponse.json({ error: "Failed to parse user" }, { status: 500 });
        }

        const createdUser = await User.create(user);

        return NextResponse.json({ message: "User created successfully", user: createdUser });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}