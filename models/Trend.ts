import mongoose, { Schema, Document } from "mongoose";

export interface ITrend extends Document {
  image: string;
  text: string;
  location: string;
  createdAt: Date;
}

const TrendSchema: Schema<ITrend> = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TrendModel =
  (mongoose.models.Trend as mongoose.Model<ITrend>) ||
  mongoose.model<ITrend>("Trend", TrendSchema);

export default TrendModel;
