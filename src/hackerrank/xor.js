// @flow

// https://www.hackerrank.com/challenges/xor-key?h_r=next-challenge&h_v=zen

// const pow = (x, exp) => {
//   let p = 1
//   while (exp > 0) {
//     p += x * x
//     exp--
//   }
//   return p
// }
//
// const xor = (a, b) => {
//   let exp = 0
//   let x = 0
//   while (a > 0 || b > 0) {
//     const divA = parseInt(a / 2)
//     const modA = a % 2
//     const divB = parseInt(b / 2)
//     const modB = b % 2
//     if (modA !== modB) {
//       x += pow(2, exp)
//     }
//     a = divA
//     b = divB
//     exp++
//   }
//   return x
// }

// const maxXOR = (seq, a, p, q) => {
//   let max = seq[0]
//   for (let element of seq) {
//     max = Math.max(max, xor(a, element))
//   }
//   return max
// }

// const performTests = (Q, queries, seq) => {
//   let results = []
//   for (let i = 0; i < Q; i++) {
//     results.push(maxXOR(seq, queries[i].a, queries[i].p, queries[i].q))
//   }
//   return results
// }
//
// const XORKey = (tests) => {
//   let results = []
//   for (let test of tests) {
//     const { Q, queries, seq } = test
//     for (let i = 0; i < Q; i++) {
//       results.push(maxXOR(seq, queries[i].a, queries[i].p, queries[i].q))
//     }
//   }
//   return results
// }

export {
  // XORKey,
  // xor
}
