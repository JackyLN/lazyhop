import { Router, Request, Response } from "express";
import searchRoutes from "./searchRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello wolrd");
});

router.use("/search", searchRoutes);

export default router;