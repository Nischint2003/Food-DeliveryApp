import mongoose from "mongoose";

export const connectDB = (URI) => {
    mongoose.connect(URI).then(()=>{
        console.log("Database Connected");
    })
};
