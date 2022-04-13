<script setup>
import CartDetails from "./CartDetails.vue";
import orders from "../utils/cartDetails.json";
</script>

<template>
  <CartDetails v-for="(order, i) in orders" :key="i" :order="order" />
</template>
