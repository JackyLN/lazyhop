import { Router } from "express";
import { getAll } from "../controller/searchController";

const router = Router();

router.route("/").get(getAll);

export default router;