import mongoose from 'mongoose';
import UserRolePermission from '../models/UserRolePermissionModel.js';


const getUserRolePermissionList = async (req, res, next) => {
  try {
    let data = await UserRolePermission.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateUserRolePermissionByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await UserRolePermission.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "UserRolePermission updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getUserRolePermissionById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await UserRolePermission.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserRolePermissionById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await UserRolePermission.findByIdAndRemove(id)
    res.status(200).json({ messgae: "UserRolePermission deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUserRolePermissionByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserRolePermission.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'UserRolePermission not found' });
    }
    res.status(200).json({ message: "UserRolePermission deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeUserRolePermission = async (req, res, next) => {
  try {
    let newModel = new UserRolePermission(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkUserRolePermission = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await UserRolePermission.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkUserRolePermission = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new UserRolePermission(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getUserRolePermissionList,
  storeUserRolePermission,
  getUserRolePermissionById,
  deleteUserRolePermissionById,
  updateUserRolePermissionByID,
  updateBulkUserRolePermission,
  insertBulkUserRolePermission
}
