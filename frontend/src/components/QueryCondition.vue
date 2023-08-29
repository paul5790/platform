<template>
  <div class="table-container">
    <v-row>
      <v-col cols="9" class="pa-5">
        <!-- 왼쪽 열 -->
        <p>조회조건</p>
        <v-row class="ma-3">
          <v-col cols="4">
            <label for="">Start date</label><br />
            <div class="datepicker-wrapper">
              <Datepicker class="datepicker" v-model="picked">
              </Datepicker>
            </div>
          </v-col>
          <v-col cols="4">
            <label for="">End date</label><br />
            <div class="datepicker-wrapper">
              <Datepicker class="datepicker" v-model="picked">
              </Datepicker>
            </div>
          </v-col>
          <v-col cols="4"> </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" class="pa-3">
        <!-- 오른쪽 열 -->
        <div class="ml-8">
          <div class="mt-2">
            <input id="cb1" type="checkbox" />
            <label class="cb_text" for="cb1">Minimum</label><br />
          </div>
          <div class="mt-2">
            <input id="cb2" type="checkbox" />
            <label class="cb_text" for="cb2">Maximum</label><br />
          </div>
          <div class="mt-2">
            <input id="cb3" type="checkbox" />
            <label class="cb_text" for="cb3">Average</label><br />
          </div>
        </div>
        <v-btn class="btn-primary btn-AC">Add</v-btn>
        <v-btn class="ml-3 btn-AC">Cancel</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Datepicker from "vue3-datepicker";
const picked = ref(new Date());

</script>
<style scoped>
.table-container {
  height: 200px; /* Set the height to 500px */
  border: 1px solid #ccc; /* Add border to create a box around the component */
  border-radius: 4px; /* Optional: Add border radius to round the corners */
  padding: 10px; /* Optional: Add padding to create some space between the component and the border */
}
.datepicker-wrapper {
  display: inline-block;
  padding: 10px; /* 원하는 패딩 설정 */
  border: 1px solid #ccc; /* 솔리드 설정 */
  border-radius: 4px;
}
.datepicker {
  padding: 0;
  border: none;
}
.btn-primary {
  width: 80px;
  color: #fff;
  background-color: #009dff;
}
.btn-AC {
  margin-top: 30px;
}
.cb_text {
  margin-left: 10px;
}
.date {
  display: inline-flex;
}
</style>
