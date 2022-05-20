import {Router as router, Request, Response} from 'express';
import {getPalindromes} from '../palindrome';

const appRouter = router();

appRouter.get('/', (req: Request, res: Response) => {
  const {initialValue, finalValue} = req.params;

  const palindromes = getPalindromes(Number(initialValue), Number(finalValue));

  res.status(200).json({palindromes});
});

export default appRouter;
