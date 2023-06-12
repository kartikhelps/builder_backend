import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const CustomerAuditSchema = new Schema( {

    Entity : {    type :    String ,      },

    ChangedFrom : {    type :    String ,      },ChangedTo : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const CustomerAudit = mongoose.model("CustomerAudit", CustomerAuditSchema);

export default CustomerAudit;