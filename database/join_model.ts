import { Schema, model, models, Document } from "mongoose";
import { Types } from "mongoose";

export interface IEventJoin extends Document {
    event: Types.ObjectId;
    participant: Types.ObjectId;
    status: 'not_attending' | 'attending';
    createdAt: Date;
    updatedAt: Date;
}

const EventJoinSchema = new Schema({
    event: { type: Types.ObjectId, ref: 'Event', required: true },
    participant: { type: Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['not_attending', 'attending'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const EventJoin = models.EventJoin || model<IEventJoin>('EventJoin', EventJoinSchema);

export default EventJoin;