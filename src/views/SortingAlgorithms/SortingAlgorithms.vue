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
      <v-slider
        v-model="length"
        :label="`${length} elements to be sorted`"
        min="5"
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
      <div
        class="columns"
      >
        <div
          v-for="(height, idx) in arr"
          :key="idx"
          class="column"
          :style="{ height: `${height}%` }"
        />
      </div>
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
    max: 100,
    length: 2,
    time: 8,
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
      this.arr = Array.from({ length }).map(() => Math.random() * max);
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
    width: 80vw;
    .v-input {
      .v-input__slot {
        margin: 0;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      padding-bottom: 10px;
    }
    .columns {
      height: calc(100vh - 256px);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
      transform: rotate(180deg) scaleX(-1);
      .column {
        background-color: green;
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
