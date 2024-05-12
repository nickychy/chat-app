import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://nicky:123456789a@cluster0.kscr8iv.mongodb.net/chatapp`);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
