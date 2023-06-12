import express from 'express';
import UserPermissionController from "../controller/UserPermissionController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", UserPermissionController.storeUserPermission)
  .get("/", UserPermissionController.getUserPermissionById)
  .get("/list", UserPermissionController.getUserPermissionList)
  .put("/", UserPermissionController.updateUserPermissionByID)
  .delete("/", UserPermissionController.deleteUserPermissionById)
  .post("/bulkInsert", uploader.single("fileCSV"), UserPermissionController.insertBulkUserPermission)
  .post("/bulkUpdate", uploader.single("fileCSV"),UserPermissionController.updateBulkUserPermission)

export default router;



