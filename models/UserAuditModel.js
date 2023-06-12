import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const UserAuditSchema = new Schema( {

    Entity : {    type :    String ,      },

    ChangedFrom : {    type :    String ,      },ChangedTo : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const UserAudit = mongoose.model("UserAudit", UserAuditSchema);

export default UserAudit;