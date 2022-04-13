<template>
  <div class="profile-card-wrapper">
    <img src="../assets/images/avatar.png" class="user-avatar" />
    <div class="user-details-wrapper">
      <h3 class="title">{{ title }}</h3>
      <h5 class="description">{{ description }}</h5>
    </div>
  </div>
</template>

<script>
import "../assets/styles/profileCard.css";
export default {
  props: ["title", "description"],
};
</script>
