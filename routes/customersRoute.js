import express from 'express';
import customersController from "../controller/customersController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", customersController.storecustomers)
  .get("/", customersController.getcustomersById)
  .get("/list", customersController.getcustomersList)
  .put("/", customersController.updatecustomersByID)
  .delete("/", customersController.deletecustomersById)
  .post("/bulkInsert", uploader.single("fileCSV"), customersController.insertBulkcustomers)
  .post("/bulkUpdate", uploader.single("fileCSV"),customersController.updateBulkcustomers)

export default router;



