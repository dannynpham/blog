<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <div>Original</div>
    <span>{{ originalArr.join(', ') }}</span>
    <div>Sorted</div>
    <span>{{ arr.join(', ') }}</span>
  </div>
</template>

<script>
import bubbleSort from '@/algorithms/sorting/bubbleSort';

export default {
  name: 'Home',
  data: () => ({
    originalArr: [7, 5, 4, 345, 545, 655, 75, 33242, 45, 5546, 4567, 647, 455242, 57, 769],
    arr: [7, 5, 4, 345, 545, 655, 75, 33242, 45, 5546, 4567, 647, 455242, 57, 769],
  }),
  mounted() {
    window.test = this;
    bubbleSort(this.arr);
  },
  methods: {

  },
};
</script>

<style lang="scss">
.home {
  font-size: 25px;
}
</style>
