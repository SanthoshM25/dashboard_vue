<template>
  <div class="statistics-wrapper">
    <div>
      <div class="title-wrapper">
        <p class="title">{{ data.title }}</p>
        <p class="variation">{{ data.variation }}</p>
      </div>
      <h2 class="content">{{ data.content }}</h2>
      <p class="sub-content">{{ data.subContent }}</p>
    </div>
    <hr />
  </div>
</template>

<script>
import "../assets/styles/statisticsCard.css";
export default {
  props: ["data"],
};
</script>
