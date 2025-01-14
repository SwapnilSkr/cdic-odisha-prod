import mongoose, { Schema, Document } from "mongoose";

export interface ITimeline extends Document {
  image: string;
  text: string;
  location: string;
  videoUrl: string;
  createdAt: Date;
}

const TimelineSchema: Schema<ITimeline> = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  videoUrl: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TimelineModel =
  (mongoose.models.Timeline as mongoose.Model<ITimeline>) ||
  mongoose.model<ITimeline>("Timeline", TimelineSchema);

export default TimelineModel;
