import { Schema } from "mongoose"




const House = new Schema({
  floors: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  squareFeet: { type: Number, required: true },
  year: { type: Date, required: true },
  imgUrl: { type: String, required: true }
},
  { timestamps: true, toJSON: { virtuals: true } })

export default House