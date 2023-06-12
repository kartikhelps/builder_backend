import express from 'express';
import CustomerAuditController from "../controller/CustomerAuditController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", CustomerAuditController.storeCustomerAudit)
  .get("/", CustomerAuditController.getCustomerAuditById)
  .get("/list", CustomerAuditController.getCustomerAuditList)
  .put("/", CustomerAuditController.updateCustomerAuditByID)
  .delete("/", CustomerAuditController.deleteCustomerAuditById)
  .post("/bulkInsert", uploader.single("fileCSV"), CustomerAuditController.insertBulkCustomerAudit)
  .post("/bulkUpdate", uploader.single("fileCSV"),CustomerAuditController.updateBulkCustomerAudit)

export default router;



