import mongoose from 'mongoose';
import UserPermission from '../models/UserPermissionModel.js';


const getUserPermissionList = async (req, res, next) => {
  try {
    let data = await UserPermission.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateUserPermissionByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await UserPermission.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "UserPermission updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getUserPermissionById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await UserPermission.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserPermissionById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await UserPermission.findByIdAndRemove(id)
    res.status(200).json({ messgae: "UserPermission deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserPermissionByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserPermission.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'UserPermission not found' });
    }
    res.status(200).json({ message: "UserPermission deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeUserPermission = async (req, res, next) => {
  try {
    let newModel = new UserPermission(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkUserPermission = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await UserPermission.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkUserPermission = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new UserPermission(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getUserPermissionList,
  storeUserPermission,
  getUserPermissionById,
  deleteUserPermissionById,
  updateUserPermissionByID,
  updateBulkUserPermission,
  insertBulkUserPermission
}
