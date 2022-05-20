import { Router as router, Request, Response } from 'express';
import getPalindromes from './getPalindrome';
import validateInterval from '../middlewares/validateInterval';

const appRouter = router();

appRouter.get('/', validateInterval, (req: Request, res: Response) => {
  const { initialValue, finalValue } = req.query;

  const palindromes = getPalindromes(Number(initialValue), Number(finalValue));

  res.status(200).json({ palindromes });
});

export default appRouter;
