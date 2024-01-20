import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Erorr in mongoDB ${error}`);
  }
};

export default connectDB;
