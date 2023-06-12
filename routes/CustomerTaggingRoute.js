import express from 'express';
import CustomerTaggingController from "../controller/CustomerTaggingController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", CustomerTaggingController.storeCustomerTagging)
  .get("/", CustomerTaggingController.getCustomerTaggingById)
  .get("/list", CustomerTaggingController.getCustomerTaggingList)
  .put("/", CustomerTaggingController.updateCustomerTaggingByID)
  .delete("/", CustomerTaggingController.deleteCustomerTaggingById)
  .post("/bulkInsert", uploader.single("fileCSV"), CustomerTaggingController.insertBulkCustomerTagging)
  .post("/bulkUpdate", uploader.single("fileCSV"),CustomerTaggingController.updateBulkCustomerTagging)

export default router;



