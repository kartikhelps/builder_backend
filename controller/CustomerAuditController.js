import mongoose from 'mongoose';
import CustomerAudit from '../models/CustomerAuditModel.js';


const getCustomerAuditList = async (req, res, next) => {
  try {
    let data = await CustomerAudit.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateCustomerAuditByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await CustomerAudit.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "CustomerAudit updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getCustomerAuditById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await CustomerAudit.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteCustomerAuditById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await CustomerAudit.findByIdAndRemove(id)
    res.status(200).json({ messgae: "CustomerAudit deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteCustomerAuditByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await CustomerAudit.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'CustomerAudit not found' });
    }
    res.status(200).json({ message: "CustomerAudit deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeCustomerAudit = async (req, res, next) => {
  try {
    let newModel = new CustomerAudit(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkCustomerAudit = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await CustomerAudit.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkCustomerAudit = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new CustomerAudit(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getCustomerAuditList,
  storeCustomerAudit,
  getCustomerAuditById,
  deleteCustomerAuditById,
  updateCustomerAuditByID,
  updateBulkCustomerAudit,
  insertBulkCustomerAudit
}
