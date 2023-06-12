import express from 'express';
import UserRoleController from "../controller/UserRoleController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", UserRoleController.storeUserRole)
  .get("/", UserRoleController.getUserRoleById)
  .get("/list", UserRoleController.getUserRoleList)
  .put("/", UserRoleController.updateUserRoleByID)
  .delete("/", UserRoleController.deleteUserRoleById)
  .post("/bulkInsert", uploader.single("fileCSV"), UserRoleController.insertBulkUserRole)
  .post("/bulkUpdate", uploader.single("fileCSV"),UserRoleController.updateBulkUserRole)

export default router;



