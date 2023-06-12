import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";


import propertiesRoutes from "./routes/propertiesRoute.js";

import UsersRoutes from "./routes/UsersRoute.js";

import UserRolePermissionRoutes from "./routes/UserRolePermissionRoute.js";

import UserPermissionRoutes from "./routes/UserPermissionRoute.js";

import UserRoleRoutes from "./routes/UserRoleRoute.js";

import customersRoutes from "./routes/customersRoute.js";

import MastersRoutes from "./routes/MastersRoute.js";

import CustomerTaggingRoutes from "./routes/CustomerTaggingRoute.js";

import CustomerAuditRoutes from "./routes/CustomerAuditRoute.js";

import UserTaggingRoutes from "./routes/UserTaggingRoute.js";

import UserAuditRoutes from "./routes/UserAuditRoute.js";




const app = express()
dotenv.config()
app.use(cors());
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  secret: "techHelps",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
})); 


mongoose.connect("mongodb+srv://akhil1659:akhil1659@cluster0.j8yybxd.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", (err) => {
  console.log(err)
})

db.once("open", () => {
  console.log("Database Connected")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`)
})
app.use("/api/properties", propertiesRoutes)
app.use("/api/Users", UsersRoutes)
app.use("/api/UserRolePermission", UserRolePermissionRoutes)
app.use("/api/UserPermission", UserPermissionRoutes)
app.use("/api/UserRole", UserRoleRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/Masters", MastersRoutes)
app.use("/api/CustomerTagging", CustomerTaggingRoutes)
app.use("/api/CustomerAudit", CustomerAuditRoutes)
app.use("/api/UserTagging", UserTaggingRoutes)
app.use("/api/UserAudit", UserAuditRoutes)

