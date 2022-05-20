import express from 'express';
import palindrome from '../palindrome/router';
import monetary from '../monetary/router';
import garage from '../garage/router';

const app = express();

app
  .use(express.json())
  .use('/palindrome', palindrome)
  .use('/monetary', monetary)
  .use('/garage', garage);

export default app;
