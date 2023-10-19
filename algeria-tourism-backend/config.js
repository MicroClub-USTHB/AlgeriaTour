import mongoose from "mongoose";
import "dotenv/config";

// Connect MongoDB at mongoURL or default port 27017.
export const connectDB = () => {
    const mongodb_url = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";
    mongoose.connect(mongodb_url)
        .then(() => {
            console.log("MongoDB Connection Succeeded.");
        })
        .catch((error) => {
            if (!error) {
                console.log("MongoDB Connection Succeeded.");
                console.log("Server is running on http://127.0.0.1:8000/")
            } else {
                throw new Error("Error in DB connection: " + error);
            }
        });

};

// Connect Server at default port 8000.
export const connectServer = (app) => {
    const PORT = process.env.PORT || 8000;
    try {
        app.listen(PORT, () => console.log(`Server running on PORT ${PORT}.`));
    } catch (error) {
        throw new Error("Error in server connection: " + err);
    }
};
