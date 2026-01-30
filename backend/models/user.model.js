import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: { type: String, require: true },

  email: { type: String, require: true, unique: true },

  password: { type: String },

  mobile: { type: String, require: true },

  role: {
    type: String,
    enum: ["user", "owner", "deliveryBoy"],
    require: true
  },
  resetOtp:{
    type:String,
  },
  isOtpVerified:{
    type:Boolean,
  },
  otpExpires:{
    type:Date,
  }

}, {
  timeseries: true
})

const User = mongoose.model("User",userSchema)
export default User