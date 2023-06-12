import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const propertiesSchema = new Schema( {

    City : {    type :    String ,   require : [true,"City is required " ],     },

    Location : {    type :    String ,   require : [true,"Location is required " ],     },PlotNumber : {    type :    String ,   require : [true,"PlotNumber is required " ],    unique :true,   },Size : {    type :    String ,   require : [true,"Size is required " ],     },Floor : {    type :    String ,   require : [true,"Floor is required " ],     },Accommodation : {    type :    String ,   require : [true,"Accommodation is required " ],     },Possession : {    type :    String ,   require : [true,"Possession is required " ],     },Price : {    type :    String ,   require : [true,"Price is required " ],     },Facing : {    type :    String ,   require : [true,"Facing is required " ],     },ParkFacing : {    type :    String ,   require : [true,"ParkFacing is required " ],     },Corner : {    type :    String ,   require : [true,"Corner is required " ],     },Description : {    type :    String ,   require : [true,"Description is required " ],     },Title : {    type :    String ,   require : [true,"Title is required " ],    unique :true,   },BuilderName : {    type :    String ,   require : [true,"BuilderName is required " ],     },Contact : {    type :    String ,   require : [true,"Contact is required " ],     },EditorChoice : {    type :    String ,      },FolderName : {    type :    String ,   require : [true,"FolderName is required " ],     },PhotoType : {    type :    String ,   require : [true,"PhotoType is required " ],    unique :true,   },Image : {    type :    String ,   require : [true,"Image is required " ],     },THUMBNAL : {    type :    String ,      },user_id : {    type : Schema.Types.ObjectId  ,  ref : 'users',      },approved : {    type :    Boolean ,      }, 
    

  },  {timestamps:true}
  )

const properties = mongoose.model("properties", propertiesSchema);

export default properties;