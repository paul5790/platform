<template>
  <div>
    <input id="cb1" type="checkbox" /> <label for="cb1">1</label>
    <input id="cb2" type="checkbox" /> <label for="cb2">2</label>
    <input id="cb3" type="checkbox" /> <label for="cb3">3</label>
    <table>
      <tr
        v-for="(item, index) in tableData"
        :key="index"
        @click="showSelectedData(item)"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <!-- Add more columns as needed -->
      </tr>
    </table>
    <hr />
    <div v-if="selectedData">
      <p>Name: {{ selectedData.name }}</p>
      <p>Age: {{ selectedData.age }}</p>
      <!-- Display more information as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableData = ref([
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  // Add more rows of data as needed
]);

const selectedData = ref(null);

const showSelectedData = (item) => {
  selectedData.value = item;
};
</script>
