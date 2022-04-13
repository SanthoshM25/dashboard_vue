<template>
  <div class="sidebar-wrapper">
    <div class="logo-wrapper">
      <i class="fa-solid fa-apple-whole logo"></i>
      <h2 class="logo-title">BlueReceipt</h2>
    </div>
    <input type="text" placeholder="Search...." class="search-box" />
    <hr class="horizontal-divider" />
    <div class="menu-wrapper">
      <router-link
        to="/"
        :class="{ 'active-sidebar': active === 'dashboard' }"
        class="menu-items"
        @click="changeActive('dashboard')"
      >
        <i class="fa-solid fa-house-chimney-window"></i>
        <p>Dashboard</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'conversations' }"
        @click="changeActive('conversations')"
      >
        <i class="fa-solid fa-envelope"></i>
        <p>Conversations</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'automations' }"
        @click="changeActive('automations')"
      >
        <i class="fa-solid fa-list-check"></i>
        <p>Automations</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'campaigns' }"
        @click="changeActive('campaigns')"
      >
        <i class="fa-solid fa-chart-column"></i>
        <p>Campaigns</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'popup' }"
        @click="changeActive('popup')"
      >
        <i class="fa-solid fa-bell"></i>
        <p>Popup</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'livechat' }"
        @click="changeActive('livechat')"
      >
        <i class="fa-solid fa-message"></i>
        <p>Live Chat</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'segments' }"
        @click="changeActive('segments')"
      >
        <i class="fa-solid fa-chart-pie"></i>
        <p>Segments</p>
      </router-link>
      <router-link
        to="/"
        class="menu-items"
        :class="{ 'active-sidebar': active === 'integration' }"
        @click="changeActive('integration')"
      >
        <i class="fa-solid fa-arrows-turn-to-dots"></i>
        <p>Integration</p>
      </router-link>
    </div>
    <ProfileCard title="User Name" description="Store Name" class="user-card" />
  </div>
</template>

<script>
import "../assets/styles/sideBar.css";
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
