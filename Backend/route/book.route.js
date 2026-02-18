import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

// GET /book/:id - Get book by ID
router.get("/", getBook);

export default router;
