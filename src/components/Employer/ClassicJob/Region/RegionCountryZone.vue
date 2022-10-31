<template>
  <div class="country-item">
    <slot name="input"></slot>
    <label class="nameCountry" :for="forV">{{ value }}</label>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    forV: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.country-item {
  input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 13px;
    height: 17px;
    opacity: 0;
    &:checked + label {
      background-color: #ee542f !important;
      color: $white !important;
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0 2px 6px rgb(77 35 16 / 15%);
    }
  }

  label {
    padding: 0.625rem 1rem;
    display: block;
    text-align: center;
    border: 1px solid $color-border-light;
    color: $color-dark;
    cursor: pointer;
    background-color: #f2f3f5;
    border: none;
  }
}

// .custom-checkbox-btn--success {
//   label {
//     background-color: #ee542f !important;
//     color: $white !important;
//     border-color: rgba(0, 0, 0, 0);
//     box-shadow: 0 2px 6px rgb(77 35 16 / 15%);
//   }
// }
</style>
