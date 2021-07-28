import { Router } from "express";

import multer from "multer";
import { CreateProductController } from "./useCases/product/create/CreateProductController";

const multerConfig = multer();

const router = Router();

const createProductController = new CreateProductController();

router.post("/products", multerConfig.single("file"), createProductController.handler);

export { router };