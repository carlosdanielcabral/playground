import express from 'express';
import palindrome from './palindrome';

const app = express();

app.use('/palindrome', palindrome);

export default app;
