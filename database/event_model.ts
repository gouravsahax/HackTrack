import {Schema, model, models, Document} from "mongoose";

export interface Event {
    title: string;
    description: string;
    organizer: string;
    image: string;
    timing: string;
    location: string;
    college: string;
    city: string;
    state: string;
    rules: string[];
    maxParticipants: number;
    numberOfParticipants: number;
    virtual: boolean;
    femaleOnly: boolean;
}

const EventSchema: Schema<Event> = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 600,
    },
    organizer: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
    },
    timing: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    rules: {
        type: [String],
        required: true,
    },
    maxParticipants: {
        type: Number,
        required: true,
    },
    numberOfParticipants: {
        type: Number,
        required: true,
        default: 0,
    },
    virtual: {
        type: Boolean,
        required: true,
    },
    femaleOnly: {
        type: Boolean,
        required: true,
    }
})

function NormalizeDate(dateString:string):string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date string');
    }
    return date.toISOString().split('T')[0];
}
