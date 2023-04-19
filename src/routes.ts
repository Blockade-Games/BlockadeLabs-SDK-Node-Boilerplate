import * as express from "express";
import multer from "multer";

import {
  getSkyboxStyles,
  generateSkybox,
} from "@/controllers/skybox.controller";
import {
  getGenerators,
  generateImagine,
  getImagineById,
  getImagineByObfuscatedId,
  getImagineHistory,
  cancelImagine,
  cancelAllPedingImagines,
  deleteImagine,
} from "@/controllers/imagine.controller";

const router = express.Router();

router.get("/skybox/getSkyboxStyles", getSkyboxStyles);
router.post("/skybox/generateSkybox", generateSkybox);

router.get("/imagine/getGenerators", getGenerators);

// Using multer here to proccess multipart files
router.post("/imagine/generateImagine", multer().any(), generateImagine);

router.get("/imagine/getImagineById", getImagineById);
router.get("/imagine/getImagineByObfuscatedId", getImagineByObfuscatedId);
router.get("/imagine/getImagineHistory", getImagineHistory);
router.post("/imagine/cancelImagine", cancelImagine);
router.post("/imagine/cancelAllPedingImagines", cancelAllPedingImagines);
router.delete("/imagine/deleteImagine", deleteImagine);

export { router };
