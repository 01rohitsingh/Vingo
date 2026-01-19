import mongoose from "mongoose"

const connectDb=async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("db connect")

  }
  catch(errot)
  {
    console.log("db error")
  }
}

export default connectDb;