import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import Event from "@/database/event_model";

export async function POST(request: Request) {
    try {
        await connectDB();

        const data = await request.formData();

        let event;

        try{
            event = Object.fromEntries(data.entries());
        }catch(err){
            return NextResponse.json({ error: "Failed to parse event" }, { status: 500 });
        }

        const createdEvent = await Event.create(event);

        return NextResponse.json({ message: "Event created successfully", event: createdEvent });

    } catch (error) {
        console.error("Error creating event:", error);
        return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
    }
}