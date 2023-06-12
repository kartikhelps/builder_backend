import mongoose from 'mongoose';
import CustomerTagging from '../models/CustomerTaggingModel.js';


const getCustomerTaggingList = async (req, res, next) => {
  try {
    let data = await CustomerTagging.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateCustomerTaggingByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await CustomerTagging.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "CustomerTagging updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getCustomerTaggingById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await CustomerTagging.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteCustomerTaggingById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await CustomerTagging.findByIdAndRemove(id)
    res.status(200).json({ messgae: "CustomerTagging deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteCustomerTaggingByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await CustomerTagging.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'CustomerTagging not found' });
    }
    res.status(200).json({ message: "CustomerTagging deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeCustomerTagging = async (req, res, next) => {
  try {
    let newModel = new CustomerTagging(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkCustomerTagging = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await CustomerTagging.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkCustomerTagging = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new CustomerTagging(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getCustomerTaggingList,
  storeCustomerTagging,
  getCustomerTaggingById,
  deleteCustomerTaggingById,
  updateCustomerTaggingByID,
  updateBulkCustomerTagging,
  insertBulkCustomerTagging
}
