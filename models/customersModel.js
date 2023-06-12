import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const customersSchema = new Schema( {

    name : {    type :    String ,      },

    contact : {    type :    Number ,      },email : {    type :    String ,     unique :true,   }, 
    

  },  {timestamps:true}
  )

const customers = mongoose.model("customers", customersSchema);

export default customers;