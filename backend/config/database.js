import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment variables from the `.env` file
dotenv.config();

// Create the connection to the database using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,        // Database host
    port: process.env.DB_PORT,        // Database port
    user: process.env.DB_USER,        // Database user
    password: process.env.DB_PASSWORD, // Database password
    database: process.env.DB_NAME,    // Database name
    ssl: process.env.SSL_MODE === "REQUIRED" ? { rejectUnauthorized: false } : null,
});

// Connect to the database
db.connect(error => {
    if (error) {
        console.error("Error connecting to the database:", error.message);
        return;
    }
    console.log("Successfully connected to the database.");
});

export default db;
