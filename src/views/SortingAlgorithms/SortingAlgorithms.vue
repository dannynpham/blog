<template>
  <div class="sorting-algorithms">
    <div class="content">
      <v-data-table
        v-model="tableSelected"
        :headers="headers"
        :items="data"
        dense
        :disable-pagination="true"
        :hide-default-footer="true"
        :single-select="true"
        item-key="value"
        show-select
      />
      <v-text-field
        v-model="time"
        type="number"
        label="Time between each sort action"
        :rules="generateTimeRules"
      />
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
      <div class="buttons">
        <v-btn
          color="primary"
          x-large
          rounded
          elevation="15"
          @click="sort"
        >
          Sort!
        </v-btn>
        <v-btn
          x-large
          rounded
          elevation="15"
          @click="shuffle"
        >
          Shuffle!
        </v-btn>
      </div>
      <div>{{ arr.join(', ') }}</div>
    </div>
  </div>
</template>

<script>
import algorithms from './Algorithms';
import { headers, data } from './tableData';

export default {
  name: 'SortingAlgorithms',
  data: () => ({
    arr: [],
    max: 1000,
    length: 2,
    time: 1,
    generateTimeRules: [
      (val) => val > 1 || 'Must be greater than 1',
      (val) => val < 1000 || 'Must be less than 1000',
    ],
    generateMaxRules: [
      (val) => val > 10 || 'Must be greater than 10',
      (val) => val < 1000 || 'Must be less than 1000',
    ],
    headers,
    data,
    tableSelected: [],
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
    ...algorithms,
    sort() {
      const [sortingAlgorithm] = this.tableSelected;
      if (sortingAlgorithm) this[sortingAlgorithm.value](this.arr, this.time);
    },
    generateRandomArr(max = 1000, length = 15) {
      this.arr = Array.from({ length }).map(() => Math.floor(Math.random() * max));
    },
    shuffle() {
      this.arr = this.arr.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style lang="scss">
.sorting-algorithms {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 25px;
  width: 100vw;
  height: calc(100vh - 84px);
  .content {
    width: 70vw;
    .buttons {
      display: flex;
      justify-content: space-around;
      padding-bottom: 30px;
    }
  }
}
</style>
