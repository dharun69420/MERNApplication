import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});
export default mongoose.model("users", userSchema);
