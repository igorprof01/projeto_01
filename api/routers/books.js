import express from 'express';
import { getBooks, addBook } from '../controllers/book.js';

const router = express.Router();

router.get("/", getBooks);

router.post("/", addBook);

export default router;