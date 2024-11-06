// Worst case = O(n)
function logTime(n) {
  for (let i = 0; i <= n; i++) {
    // first ops - n
    console.log(n);
  }
  for (let j = 0; j <= n; j++) {
    // second ops -n
    console.log(n);
  }
}
// n + n = 2n

// Worst case = O(n^2)
function logTime(n) {
  for (let i = 0; i <= n; i++) {
    // first operation -n
    for (let j = 0; j <= n; j++) {
      // second ops -n
      console.log(n);
    }
  }
}
// n * n = n2

// Worst Case = O(1)
function addVal(n) {
  return n + n;
}

/**
 * Array
 * - push/ pop = O(1)
 * - splice = O(n)
 * - filter & map = O(n)
 * - filterBy index = O(1)
 */

// Divide n Conquer = O(log2n)
