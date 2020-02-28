// for (let count = 0; count < array.length; count++) {
//   const currentVal = array[count];
//   let minIndex = count;
//   for (let nextCount = count; nextCount < array.length; nextCount++) {
//     const minVal = array[minIndex];
//     const nextVal = array[nextCount];
//     if (minVal > nextVal) {
//       minIndex = nextCount;
//     }
//   }
//   array.splice(count, 1, array[minIndex]);
//   array.splice(minIndex, 1, currentVal);
// }
export default (array, time = 100) => {
  let count = 0;
  let minIndex = count;
  let nextCount = count;
  const selectionSort = setInterval(() => {
    if (count < array.length) {
      const currentVal = array[count];
      if (nextCount < array.length) {
        const minVal = array[minIndex];
        const nextVal = array[nextCount];
        if (minVal > nextVal) {
          minIndex = nextCount;
        }
        nextCount += 1;
      }
      if (nextCount === array.length) {
        array.splice(count, 1, array[minIndex]);
        array.splice(minIndex, 1, currentVal);
        count += 1;
        nextCount = count;
        minIndex = count;
      }
    }
    if (count === array.length) clearInterval(selectionSort);
  }, time);
};
