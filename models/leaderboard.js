import mongoose from "mongoose";
import leaderboardSchema from "../schemas/leaderboardSchema.js";

const Leaderboard = mongoose.model("leaderboard", leaderboardSchema);

export default Leaderboard;
