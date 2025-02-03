import mongoose from "mongoose";
import { DB_NAME } from "./constant.js"; // Or ./constant if using CommonJS and require
import express from "express";
import dotenv from 'dotenv'
dotenv.config();

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGDB_URI }/${DB_NAME}`);
        console.log("Connected to MongoDB"); 
        app.on("error", (error) => {
            console.error("App error:", error); 
        });

        const port = 4000; 
        app.listen(port, () => {
          console.log(`App is listening on port ${port}`);
        });
        

    } catch (error) {
        console.error("Error during startup:", error); // Log the startup error
        // If the database connection is critical, you might want to exit:
        process.exit(1);
    }
})();


