import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  username: { type: String, required: true },
  score: { type: Number, required: true, default: 0 },
  date: { type: Date, default: Date.now },
});

export default leaderboardSchema;
