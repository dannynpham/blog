<template>
  <div class="home">
    <div class="content">
      <img
        alt="Vue logo"
        src="../assets/logo.png"
      >
      <v-text-field
        v-model="max"
        type="number"
        label="Generate up to"
        :rules="generateMaxRules"
      />
      <v-slider
        v-model="length"
        :label="`${length} elements to be sorted`"
        min="2"
        max="100"
      />
      <v-btn @click="sort">
        Sort!
      </v-btn>
      <!-- <div>Original</div>
        <span>{{ originalArr.join(', ') }}</span> -->
      <div>{{ arr.join(', ') }}</div>
    </div>
  </div>
</template>

<script>
import bubbleSort from '@/algorithms/sorting/bubbleSort';
import { clone } from '@/utils';

export default {
  name: 'Home',
  data: () => ({
    originalArr: [],
    arr: [],
    max: 1000,
    length: 2,
    time: null,
    generateMaxRules: [
      (val) => val > 10 || 'Must be greater than 10',
      (val) => val < 1000 || 'Must be less than 1000',
    ],
  }),
  watch: {
    length: {
      handler() {
        this.generateRandomArr(this.max, this.length);
      },
      immediate: true,
    },
  },
  mounted() {
    window.test = this;
  },
  methods: {
    increment() {

    },
    decrement() {

    },
    sort() {
      bubbleSort(this.arr);
    },
    generateRandomArr(max = 1000, length = 15) {
      this.originalArr = Array.from({ length }).map(() => Math.floor(Math.random() * max));
      this.arr = clone(this.originalArr);
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 25px;
  width: 100vw;
  height: 100vh;
  .content {
    width: 80vw;
  }
}
</style>
