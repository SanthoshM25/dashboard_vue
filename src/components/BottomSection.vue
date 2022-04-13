<template>
  <div class="bottom-section-wrapper">
    <router-link
      to="/orders"
      class="bottom-menu-items"
      :class="{ 'active-bottom-menu': active === 'automations' }"
      @click="changeActive('automations')"
      >Automations</router-link
    >
    <router-link
      to="/orders"
      class="bottom-menu-items"
      :class="{ 'active-bottom-menu': active === 'campaigns' }"
      @click="changeActive('campaigns')"
      >Campaigns</router-link
    >
    <router-link
      to="/orders"
      class="bottom-menu-items"
      :class="{ 'active-bottom-menu': active === 'segments' }"
      @click="changeActive('segments')"
      >Segments</router-link
    >
    <router-link
      to="/orders"
      class="bottom-menu-items"
      :class="{ 'active-bottom-menu': active === 'popup' }"
      @click="changeActive('popup')"
      >Popup</router-link
    >
  </div>
  <router-view />
</template>

<script>
import "../assets/styles/bottomSection.css";

export default {
  name: "BottomSection",
  data() {
    return {
      active: "",
    };
  },
  methods: {
    changeActive: function (data) {
      this.active = data;
    },
  },
};
</script>
