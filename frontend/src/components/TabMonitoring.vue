<template>
  <v-row>
    <v-col cols="3">
      <!-- 왼쪽 열 -->
      <DataTable />
      <!-- 내용... -->
    </v-col>
    <v-col cols="9">
      <!-- 오른쪽 열 -->
      <v-row>
        <v-col cols="6">
          <!-- 오른쪽 열의 상단 왼쪽 -->
          <div class="max-height-360" style="background-color: #ecf843">
            <!-- 내용... -->
            <BarChart />
          </div>
        </v-col>
        <v-col cols="6">
          <!-- 오른쪽 열의 상단 오른쪽 -->
          <div class="max-height-360" style="background-color: #88ff7d">
            <!-- 내용... -->
            <BarChart />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <!-- 오른쪽 열의 하단 왼쪽 -->
          <div class="max-height-360" style="background-color: #707eff">
            <!-- 내용... -->
            <BarChart />
          </div>
        </v-col>
        <v-col cols="6">
          <!-- 오른쪽 열의 하단 오른쪽 -->
          <div class="max-height-360" style="background-color: #fa6bff">
            <!-- 내용... -->
            <BarChart />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
import DataTable from "../components/DataTable.vue";
import BarChart from "../components/BarChart";
</script>
<style scoped>
.max-height-360 {
  max-height: 360px;
  /* 추가 스타일을 적용할 수 있습니다. */
}
</style>
