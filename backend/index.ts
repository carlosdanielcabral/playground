import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './src/routes';
import error from './src/middlewares/error';

const app = express();

app
  .use(express.json())
  .use(cors())
  .use('/', router)
  .use(error);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
