import express from 'express';
import UserTaggingController from "../controller/UserTaggingController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", UserTaggingController.storeUserTagging)
  .get("/", UserTaggingController.getUserTaggingById)
  .get("/list", UserTaggingController.getUserTaggingList)
  .put("/", UserTaggingController.updateUserTaggingByID)
  .delete("/", UserTaggingController.deleteUserTaggingById)
  .post("/bulkInsert", uploader.single("fileCSV"), UserTaggingController.insertBulkUserTagging)
  .post("/bulkUpdate", uploader.single("fileCSV"),UserTaggingController.updateBulkUserTagging)

export default router;



