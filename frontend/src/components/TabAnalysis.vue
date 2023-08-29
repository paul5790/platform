<template>
  <v-row>
    <v-col cols="2">
      <!-- 왼쪽 열 -->
      <v-container style="background-color: #6d6767">
        <!-- 내용... -->
        <DataSearch/>
      </v-container>
    </v-col>
    <v-col cols="2">
      <!-- 왼쪽 열 -->
      <!-- 내용... -->
      <DataTable />
    </v-col>
    <v-col cols="8">
      <!-- 오른쪽 열 -->
      <v-row>
        <v-col cols="12">
          <!-- 오른쪽 열의 상단 왼쪽 -->
          <QueryCondition />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <!-- 오른쪽 열의 상단 왼쪽 -->
          <v-container style="background-color: #ecf843">
            <!-- 내용... -->
            <LineChart/>
          </v-container>
        </v-col>
        <v-col cols="6">
          <!-- 오른쪽 열의 상단 오른쪽 -->
          <v-container style="background-color: #88ff7d">
            <!-- 내용... -->
            <LineChart/>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <!-- 오른쪽 열의 하단 왼쪽 -->
          <v-container style="background-color: #707eff">
            <!-- 내용... -->
            <LineChart/>
          </v-container>
        </v-col>
        <v-col cols="6">
          <!-- 오른쪽 열의 하단 오른쪽 -->
          <v-container style="background-color: #fa6bff">
            <!-- 내용... -->
            <LineChart/>
          </v-container>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
import DataTable from "../components/DataTable.vue";
import DataSearch from "../components/DataSearch.vue";
import QueryCondition from "../components/QueryCondition.vue";
import LineChart from "../components/LineChart";
</script>
<style scoped></style>
