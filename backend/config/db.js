import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`).then(() => console.log("DataBase Connected"));
}