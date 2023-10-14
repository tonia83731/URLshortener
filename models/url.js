import mongoose from "mongoose";
const Schema = mongoose.Schema
const URLSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortenUrl: {
    type: String,
    required: true,
  }
})

const URL = mongoose.model('URL', URLSchema)
export default URL