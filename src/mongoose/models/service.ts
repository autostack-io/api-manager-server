import mongoose from "mongoose";

export default mongoose.model("Service", new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    minlength: 1,
  },
  instances: {
    type: Array,
    lowercase: true,
    minlength: 1,
  },
}));
