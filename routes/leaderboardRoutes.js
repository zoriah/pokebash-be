import express from "express";
import { getLeaderboard, addScore, updateScore, deleteScore} from "../controllers/leaderboardController.js";

const router = express.Router();

router.get("/", getLeaderboard); // get leaderboards table
router.post("/", addScore); // add new score to leaderboards table
router.put("/:id", updateScore); // update existing score in leaderboards table
router.delete("/:id", deleteScore); // delete existing score from leaderboards table

export default router;
