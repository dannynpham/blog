// for (let count = array.length; count > 0; count--) {
//   for (let i = 0; i < count; i++) {
//     const val = array[i];
//     if (i < array.length) {
//       const nextVal = array[i + 1];
//       if (val < nextVal) {
//         array.splice(i, 1, val);
//         array.splice(i + 1, 1, nextVal);
//       } else if (val > nextVal) {
//         array.splice(i, 1, nextVal);
//         array.splice(i + 1, 1, val);
//       }
//     }
//   }
// }
export default (array, time = 100) => {
  let arrCount = array.length;
  let count = 0;
  const bubbleSort = setInterval(() => {
    if (count === arrCount) {
      count = 0;
      arrCount -= 1;
    }
    if (count < arrCount) {
      const val = array[count];
      if (count < array.length) {
        const nextVal = array[count + 1];
        if (val < nextVal) {
          array.splice(count, 1, val);
          array.splice(count + 1, 1, nextVal);
        } else if (val > nextVal) {
          array.splice(count, 1, nextVal);
          array.splice(count + 1, 1, val);
        }
      }
      count += 1;
    }
    if (arrCount === 0) clearInterval(bubbleSort);
  }, time);
};
