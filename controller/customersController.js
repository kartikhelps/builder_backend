import mongoose from 'mongoose';
import customers from '../models/customersModel.js';


const getcustomersList = async (req, res, next) => {
  try {
    let data = await customers.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatecustomersByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await customers.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "customers updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getcustomersById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await customers.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecustomersById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await customers.findByIdAndRemove(id)
    res.status(200).json({ messgae: "customers deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecustomersByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await customers.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'customers not found' });
    }
    res.status(200).json({ message: "customers deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storecustomers = async (req, res, next) => {
  try {
    let newModel = new customers(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkcustomers = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await customers.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkcustomers = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new customers(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getcustomersList,
  storecustomers,
  getcustomersById,
  deletecustomersById,
  updatecustomersByID,
  updateBulkcustomers,
  insertBulkcustomers
}
