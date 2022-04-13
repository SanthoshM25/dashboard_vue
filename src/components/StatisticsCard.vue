<template>
  <div class="statistics-wrapper">
    <div class="statistics-card-wrapper">
      <div class="title-wrapper">
        <p class="statistics-title">{{ data.title }}</p>
        <p :class="{ green: data.green, red: !data.green }" class="variation">
          {{ data.variation }}
        </p>
      </div>
      <h2 class="content">{{ data.content }}</h2>
      <p class="sub-content">{{ data.subContent }}</p>
    </div>
  </div>
  <div class="hr" />
</template>

<script>
import "../assets/styles/statisticsCard.css";
export default {
  props: ["data"],
};
</script>
