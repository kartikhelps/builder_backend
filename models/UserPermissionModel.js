import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const UserPermissionSchema = new Schema( {

    Permission_id : {    type :    Number ,      },

    Permission_name : {    type :    String ,      },Permission_description : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const UserPermission = mongoose.model("UserPermission", UserPermissionSchema);

export default UserPermission;