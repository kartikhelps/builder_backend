import mongoose from 'mongoose';
import UserTagging from '../models/UserTaggingModel.js';


const getUserTaggingList = async (req, res, next) => {
  try {
    let data = await UserTagging.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateUserTaggingByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await UserTagging.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "UserTagging updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getUserTaggingById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await UserTagging.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserTaggingById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await UserTagging.findByIdAndRemove(id)
    res.status(200).json({ messgae: "UserTagging deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserTaggingByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserTagging.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'UserTagging not found' });
    }
    res.status(200).json({ message: "UserTagging deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeUserTagging = async (req, res, next) => {
  try {
    let newModel = new UserTagging(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkUserTagging = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await UserTagging.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkUserTagging = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new UserTagging(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getUserTaggingList,
  storeUserTagging,
  getUserTaggingById,
  deleteUserTaggingById,
  updateUserTaggingByID,
  updateBulkUserTagging,
  insertBulkUserTagging
}
