import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { gym, facility, booking, allFeatures } from './data/gympage.js';
import GymPage from './data/gympage.js';  
const gymPage = new GymPage();  

// Import routes
import gymRouter from './routes/gym.js';
import facilityRouter from './routes/facility.js';
import bookRouter from './routes/book.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Set up view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get("/", (req, res) => {
    res.render("pages/index", { 
        title: "Flex Fitness", 
        gym,
        facility,
        booking,
        allFeatures,
        gymPage 
    });
});

// Use the imported routes
app.use("/gym", gymRouter);
app.use("/facility", facilityRouter);
app.use("/book", bookRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});