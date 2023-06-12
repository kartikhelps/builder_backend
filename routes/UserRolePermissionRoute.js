import express from 'express';
import UserRolePermissionController from "../controller/UserRolePermissionController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", UserRolePermissionController.storeUserRolePermission)
  .get("/", UserRolePermissionController.getUserRolePermissionById)
  .get("/list", UserRolePermissionController.getUserRolePermissionList)
  .put("/", UserRolePermissionController.updateUserRolePermissionByID)
  .delete("/", UserRolePermissionController.deleteUserRolePermissionById)
  .post("/bulkInsert", uploader.single("fileCSV"), UserRolePermissionController.insertBulkUserRolePermission)
  .post("/bulkUpdate", uploader.single("fileCSV"),UserRolePermissionController.updateBulkUserRolePermission)

export default router;



