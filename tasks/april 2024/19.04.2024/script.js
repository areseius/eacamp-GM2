// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/javascript ----------------------------------------------------

// const rps = (p1, p2) => p1 == p2 ? "Draw!" : `Player ${2 - ["rs", `pr`, "sp"].includes(p1[0] + p2[0])} won!`;

// https://www.codewars.com/kata/55edaba99da3a9c84000003b ----------------------------------------------------

// const divisibleBy = (numbers, divisor) => numbers.filter(x => !(x % divisor))

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2 ----------------------------------------------------

// const removeEveryOther = arr => arr.filter((x, i) => !(i % 2))

// https://www.codewars.com/kata/5513795bd3fafb56c200049e ----------------------------------------------------

// const countBy = (x, n) => Array.from(Array(n), (_, i) => x * (i + 1));

// https://www.codewars.com/kata/57eaeb9578748ff92a000009 ----------------------------------------------------

// const sumMix = (x) => x.reduce((a, x) => a + +x, 0);

// https://www.codewars.com/kata/56f6919a6b88de18ff000b36 ----------------------------------------------------

/*

const dogs = [
  "Hardly any",
  "More than a handful!",
  "Woah that's a lot of dogs!",
  "101 DALMATIANS!!!",
];

const howManyDalmatians = (number) =>
  number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number == 101
    ? dogs[3]
    : dogs[2];

    */

// https://www.codewars.com/kata/5a3e1319b6486ac96f000049 ----------------------------------------------------

/*

const pairs = (ar) =>
  ((x) => () => {
    for (let i = 0; i < ar.length; i += 2)
      Math.abs(ar[i] - ar[i + 1]) == 1 && x++;

    return x;
  })(0)();

*/
