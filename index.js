const atMostNGivenDigitSet = (digits, n) => {
  n = n.toString()
  let len = n.length, result = 0;

  for (let i = 1; i < len; i++) result += digits.length ** i

  let b = 0;
  for (b; b < len; b++) {
    let s = digits.filter(d => d < n[b]).length
    result += s * (digits.length ** (len - b - 1))

    if (!digits.includes(n[b])) break;
  }

  result += (b === len)

  return result;
};

// Ex. 1
console.log(
  atMostNGivenDigitSet(["1", "3", "5", "7"], 100)
);

// Ex. 2
console.log(
  atMostNGivenDigitSet(["1","4","9"], 1000000000)
);

// Ex. 3
console.log(
  atMostNGivenDigitSet(["7"], 8)
);

// Ex. 4
console.log(
  atMostNGivenDigitSet(["3","4","8"], 4)
);
