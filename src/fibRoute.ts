// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(String(num)));
  let result = `fibonacci(${String(num)}) is ${String(fibN)}`;

  if (fibN < 0) {
    result = `fibonacci(${String(num)}) is undefined`;
  }

  res.send(result);
};
