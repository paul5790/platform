<template>
  <form>
    <div class="ma-10">
      <v-row class="d-flex justify-end mt-4">
        <v-col cols="auto" class="mt-2">
          {{ username }}
        </v-col>
        <v-col cols="auto" class="ml-4">
          <v-btn @click="logout">로그아웃</v-btn>
        </v-col>
      </v-row>
      <v-tabs v-model="tab" color="#009dff" align-tabs="start">
        <v-tab :value="1">monitoring</v-tab>
        <v-tab :value="2">Analysis</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 2" :key="n" :value="n">
          <div v-if="tab === 1">
            <!-- Move v-if here -->
            <div class="component-container">
              <TabMonitoring />
            </div>
          </div>
          <div v-if="tab === 2">
            <!-- Move v-if here -->
            <div class="component-container">
              <TabAnalysis />
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TabMonitoring from "../components/TabMonitoring.vue";
import TabAnalysis from "../components/TabAnalysis.vue";
const router = useRouter();
const tab = ref(null);
const username = "현민";
const logout = () => {
  router.push("/");
};
</script>

<style scoped>
/* Add styles for the component container */
.component-container {
  height: 750px; /* Set the height to 500px */
  border: 1px solid #ccc; /* Add border to create a box around the component */
  border-radius: 4px; /* Optional: Add border radius to round the corners */
  padding: 20px; /* Optional: Add padding to create some space between the component and the border */
}
</style>
