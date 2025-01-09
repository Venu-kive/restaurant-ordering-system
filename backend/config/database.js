import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create the connection to the database using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,        // Use environment variable for host
    port: process.env.DB_PORT,        // Use environment variable for port
    user: process.env.DB_USER,        // Use environment variable for user
    password: process.env.DB_PASSWORD, // Use environment variable for password
    database: process.env.DB_NAME,    // Use environment variable for database name
    // ssl: {
    //     rejectUnauthorized: false, // If SSL is required, uncomment and adjust
    // }
});

db.connect(error => {
    if (error) {
        console.error("Error connecting to the database:", error.message);
        return;
    }
    console.log("Successfully connected to the database.");
});

export default db;
