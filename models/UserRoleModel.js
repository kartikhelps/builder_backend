import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const UserRoleSchema = new Schema( {

    Role_id : {    type :    Number ,      },

    Role_name : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const UserRole = mongoose.model("UserRole", UserRoleSchema);

export default UserRole;