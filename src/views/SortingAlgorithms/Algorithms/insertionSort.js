// export default (array, time = 100) => {
export default (array) => {
  for (let i = 1; i < array.length; i++) {
    const val = array[i];
    for (let j = i - 1; j >= 0; j--) {
      const prevVal = array[j];
      console.log(val, prevVal);
      console.count('count');
      // if (val > prevVal) break;
      if (val < prevVal) {
        array.splice(j, 0, val);
        array.splice(i + 1, 1);
        break;
      }
    }
  }
  // let arrCount = array.length;
  // let count = 0;
  // const bubbleSort = setInterval(() => {
  //   if (count === arrCount) {
  //     count = 0;
  //     arrCount -= 1;
  //   }
  //   if (count < arrCount) {
  //     const val = array[count];
  //     if (count < array.length) {
  //       const nextVal = array[count + 1];
  //       if (val < nextVal) {
  //         array.splice(count, 1, val);
  //         array.splice(count + 1, 1, nextVal);
  //       } else if (val > nextVal) {
  //         array.splice(count, 1, nextVal);
  //         array.splice(count + 1, 1, val);
  //       }
  //     }
  //     count += 1;
  //   }
  //   if (arrCount === 0) clearInterval(bubbleSort);
  // }, time);
};
