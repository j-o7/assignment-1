// Endpoint for querying the fibonacci numbers
import type {Request, Response} from "express";
import fibonacci from "./fib";


export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const fibN: number = fibonacci(parseInt(String(num)));
  let result = `fibonacci(${String(num)}) is ${String(fibN)}`;

  if (fibN < 0) {
    result = `fibonacci(${String(num)}) is undefined`;
  }

  res.send(result);
};
