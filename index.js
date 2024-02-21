import express from "express";
import accountRoutes from './routes/accountRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
const PORT = 6001;

// Create user routers
app.use('/accounts', accountRoutes);

// Main route
app.use('/users', eventRoutes);


try {
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    });
} catch (error) {
    console.error('Error starting the server:', error.message);
}


