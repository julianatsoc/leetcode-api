import { Router } from "express";
import { getStats } from "./services";

const router = Router();

router.get("/stats/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const stats = await getStats(username);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do usuário." });
  }
});

export default router;
