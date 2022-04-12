<template>
  <div class="sidebar-wrapper">
    <div class="logo-wrapper">
      <i class="fa-solid fa-ticket-simple"></i>
      <h2 class="logo-title">BlueReceipt</h2>
    </div>
    <input type="text" placeholder="Search...." class="search-box" />
    <hr class="horizontal-divider" />
    <div class="menu-wrapper">
      <router-link
        to="/dashboard"
        :class="{ 'active-sidebar': active === 'dashboard' }"
        class="menu-items"
        @click="changeActive('dashboard')"
        >Dashboard</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'conversations' }"
        @click="changeActive('conversations')"
        >Conversations</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'automations' }"
        @click="changeActive('automations')"
        >Automations</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'campaigns' }"
        @click="changeActive('campaigns')"
        >Campaigns</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'popup' }"
        @click="changeActive('popup')"
        >Popup</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'livechat' }"
        @click="changeActive('livechat')"
        >Live Chat</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'segments' }"
        @click="changeActive('segments')"
        >Segments</router-link
      >
      <router-link
        to="/dashboard"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'integration' }"
        @click="changeActive('integration')"
        >Integration</router-link
      >
    </div>
    <ProfileCard title="User Name" description="Store Name" class="user-card" />
  </div>
</template>

<script>
import "../assets/styles/sidebar.css";
import ProfileCard from "./ProfileCard.vue";
export default {
  name: "SideBar",
  data() {
    return {
      active: "dashboard",
    };
  },
  methods: {
    changeActive: function (element) {
      this.active = element;
    },
  },
  components: { ProfileCard },
};
</script>
