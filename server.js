require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const habitRoutes = require('./routes/habitRoutes');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/habits', habitRoutes);

// Error handler
app.use(errorHandler);

// Connect to DB & Start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
