<template>
  <div class="cart-wrapper">
    <div class="icon-title-wrapper">
      <i class="fa-solid fa-cart-shopping fa-lg cart-icon"></i>
      <div class="cart-title-wrapper">
        <p class="cart-title">{{ order.title }}</p>
        <div class="sub-title-wrapper">
          <p class="cart-sub-title">{{ order.sent + " Sent" }}</p>
          <p class="cart-sub-title">|</p>
          <p class="cart-sub-title">{{ order.clicks + " Clicks" }}</p>
        </div>
      </div>
    </div>

    <div class="price-wrapper">
      <p class="total-price">{{ "$" + order.totalPrice }}</p>
      <div class="sub-price-wrapper">
        <p class="cart-sub-title">{{ order.orders + " Orders" }}</p>
        <p class="cart-sub-title">|</p>
        <p class="cart-sub-title">{{ order.aov + " AOV" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/styles/cartDetails.css";
export default {
  props: ["order"],
};
</script>
