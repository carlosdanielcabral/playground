import 'dotenv/config';
import express from 'express';
import router from './src/routes';

const app = express();

app.use('/', router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
