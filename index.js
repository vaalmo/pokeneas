import express from 'express';
import dotenv from 'dotenv';
import pokeneaRoutes from './routes/pokenea.routes.js'

dotenv.config();

const app = express();

app.use('/pokenea', pokeneaRoutes)

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})