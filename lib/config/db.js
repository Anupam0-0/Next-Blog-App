import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        // .env to bed done later
        const conn = await mongoose.connect('mongodb+srv://stombland:iop890jkl@cluster0.pjmvc.mongodb.net/blog-app')
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;