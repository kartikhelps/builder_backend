import express from 'express';
import MastersController from "../controller/MastersController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", MastersController.storeMasters)
  .get("/", MastersController.getMastersById)
  .get("/list", MastersController.getMastersList)
  .put("/", MastersController.updateMastersByID)
  .delete("/", MastersController.deleteMastersById)
  .post("/bulkInsert", uploader.single("fileCSV"), MastersController.insertBulkMasters)
  .post("/bulkUpdate", uploader.single("fileCSV"),MastersController.updateBulkMasters)

export default router;



