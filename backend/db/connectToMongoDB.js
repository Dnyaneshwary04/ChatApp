// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// console.log("MONGO_DB_URl:", process.env.MONGO_DB_URL);
// console.log("PORT : ", process.env.PORT);
// const connectToMongoDB = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGO_DB_URI);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.log("Error connecting to MongoDB", error.message);
// 	}
// };

// export default connectToMongoDB;

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log("MONGO_DB_URl:", process.env.MONGODB_URL);
console.log("PORT : ", process.env.PORT);
const connectToMongoDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      })
      .then(() => {
        console.log("DATABASE connected");
      });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;



