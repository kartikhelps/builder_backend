import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const UserRolePermissionSchema = new Schema( {

    PR_id : {    type :    Number ,      },

    Role_id : {    type : Schema.Types.ObjectId  ,  ref : 'roles',      },Permission_id : {    type : Schema.Types.ObjectId  ,  ref : 'UserPermission',      }, 
    

  },  {timestamps:true}
  )

const UserRolePermission = mongoose.model("UserRolePermission", UserRolePermissionSchema);

export default UserRolePermission;