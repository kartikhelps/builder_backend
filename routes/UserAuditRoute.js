import express from 'express';
import UserAuditController from "../controller/UserAuditController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", UserAuditController.storeUserAudit)
  .get("/", UserAuditController.getUserAuditById)
  .get("/list", UserAuditController.getUserAuditList)
  .put("/", UserAuditController.updateUserAuditByID)
  .delete("/", UserAuditController.deleteUserAuditById)
  .post("/bulkInsert", uploader.single("fileCSV"), UserAuditController.insertBulkUserAudit)
  .post("/bulkUpdate", uploader.single("fileCSV"),UserAuditController.updateBulkUserAudit)

export default router;



