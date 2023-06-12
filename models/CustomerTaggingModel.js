import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const CustomerTaggingSchema = new Schema( {

    tagedFromid : {    type :    String ,      },

    taggedToType : {    type :    String ,      },taggedTold : {    type :    String ,      },TaggingPurpose : {    type :    String ,      },FieldTags : {    type :    String ,      },Extras : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const CustomerTagging = mongoose.model("CustomerTagging", CustomerTaggingSchema);

export default CustomerTagging;