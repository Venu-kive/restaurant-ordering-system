import mysql from "mysql2";

// Create the connection to the Aiven database
const db = mysql.createConnection({
    host: "dbrestaurant-elaxmi04-1808.b.aivencloud.com",
    port: 20645,
    user: "avnadmin",
    password: "AVNS_UfnKKPQtMuJjeMY4jKJ",
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: false, // Allow self-signed certificates
    }
});

db.connect(error => {
    if (error) {
        console.error("Error connecting to the database:", error.message);
        return;
    }
    console.log("Successfully connected to the database.");
});

export default db;
