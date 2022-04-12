<script setup>
import "../assets/styles/dashboard.css";
import ProfileCard from "./ProfileCard.vue";
import StatisticsCard from "./StatisticsCard.vue";
import Stats from "../utils/statistics.json";
</script>

<template>
  <div class="dashboard-wrapper">
    <ProfileCard
      title="Good Morning Oguz"
      description="Here are your stats for
  Today"
      class="dashboard-user-card"
    />
    <div class="statistics-wrapper">
      <StatisticsCard v-for="(stat, i) in Stats" :key="i" :data="stat" />
    </div>
  </div>
</template>
