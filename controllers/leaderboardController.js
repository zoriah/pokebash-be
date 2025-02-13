import Leaderboard from "../models/leaderboard.js";

// get leaderboard table
export const getLeaderboard = async (req, res) => {
  try {
    console.log(">>>>>>>> I can reach that point in the backend!!")
    const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Failed to load leaderboard!" });
  }
};

// add new score to leaderboard table
export const addScore = async (req, res) => {
  const { username, score } = req.body;

  if (!username || score === undefined) {
    return res.status(400).json({ error: "Username and score are required!" });
  }

  try {
    const newScore = new Leaderboard({ username, score });
    await newScore.save();
    res.json({ message: "Score added successfully", newScore });
  } catch (error) {
    res.status(500).json({ error: "Failed to add score to leaderboard!" });
  }
};

// update existing score in leaderboard table
export const updateScore = async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;

  if (score === undefined) {
    return res.status(400).json({ error: "Score is required!" });
  }

  try {
    const updatedScore = await Leaderboard.findByIdAndUpdate(
      id,
      { score },
      { new: true } // Güncellenmiş veriyi döndürmesi için
    );

    if (!updatedScore) {
      return res.status(404).json({ error: "Score not found!" });
    }

    res.json({ message: "Score updated successfully !", updatedScore });
  } catch (error) {
    res.status(500).json({ error: "Failed to update the score!" });
  }
};

// delete the score
export const deleteScore = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedScore = await Leaderboard.findByIdAndDelete(id);

    if (!deletedScore) {
      return res.status(404).json({ error: "Score not found!" });
    }

    res.json({ message: "Score deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "failed to delete the score!" });
  }
};