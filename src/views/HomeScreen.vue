<script setup>
import { RouterView } from "vue-router";
import SideBarVue from "../components/SideBar.vue";
import Dashboard from "../components/Dashboard.vue";
import "../assets/styles/homescreen.css";
</script>

<template>
  <div class="homescreen-wrapper">
    <SideBarVue class="sidebar" />
    <router-view />
  </div>
</template>
