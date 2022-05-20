import express from 'express';
import palindrome from './palindrome';
import monetary from './monetary';
const app = express();

app
    .use('/palindrome', palindrome)
    .use('/monetary', monetary);

export default app;
