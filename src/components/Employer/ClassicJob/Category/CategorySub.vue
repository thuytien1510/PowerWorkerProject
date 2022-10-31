<template>
  <div class="subcategory-item">
    <slot name="input"></slot>
    <label :for="forV">
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    forV: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.subcategory-item {
  background-color: #f2f3f5;

  input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 13px;
    height: 17px;
    opacity: 0;
    &:checked + label {
      background-color: #e7faef !important;
      font-weight: bold;
      color: $accent !important;
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0 4px 10px rgb(77 35 16 / 19%);
    }
  }

  label {
    padding: 0.625rem 1rem;
    display: block;
    text-align: center;
    border: 1px solid $color-border-light;
    color: $color-dark;
    cursor: pointer;
    border: none;
  }
}
</style>
