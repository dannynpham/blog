// for (let i = 1; i < array.length; i++) {
//   const val = array[i];
//   let insertAt = i;
//   for (let j = i - 1; j > -1; j--) {
//     const prevVal = array[j];
//     if (val < prevVal) {
//       insertAt = j;
//     }
//   }
//   array.splice(i, 1);
//   array.splice(insertAt, 0, val);
// }
/* eslint-disable */
export default (array, time = 100) => {
  let count = 1;
  let prevCount = 0;
  let insertAt = count;
  const insertionSort = setInterval(() => {
    if (count < array.length) {
      const val = array[count];
      const prevVal = array[prevCount];
      if (prevVal > val) {
        insertAt = prevCount;
      }
      prevCount -= 1;
      if (prevCount === -1) {
        array.splice(count, 1);
        array.splice(insertAt, 0, val);
        count += 1;
        prevCount = count - 1;
        insertAt = count;
      }
    }
    if (count === array.length) clearInterval(insertionSort);
  }, time);
};
