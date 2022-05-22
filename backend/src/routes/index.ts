import express from 'express';
import palindrome from '../palindrome/router';
import monetary from '../monetary/router';
import garage from '../garage/router';
import ceps from '../ceps/router';

const app = express();

app
  .use('/palindrome', palindrome)
  .use('/monetary', monetary)
  .use('/garage', garage)
  .use('/ceps', ceps);

export default app;
