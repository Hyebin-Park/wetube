// import this to make automatically executed and the DB connection is created.
import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();

import "./models/Video"
import "./models/User"
import "./models/Comment"

const PORT = process.env.PORT || 4000;  

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening); 