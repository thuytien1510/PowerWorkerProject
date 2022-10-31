<template>
  <div class="target-item">
    <slot name="input"></slot>
    <label
      :for="forV"
    >
      {{ value }}
    </label>
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

.target-item {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 21px;

  input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 13px;
    height: 17px;
    opacity: 0;
    padding: 0;
    &:checked + label{
      background-color: #e7faef !important;
      font-weight: bold;
      color: $accent !important;
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0 4px 10px rgb(77 35 16 / 19%);
    }
  }

  label {
    display: block;
    padding: 0.875rem 1.25rem;
    text-align: center;
    border: 1px solid $color-border-light;
    color: $color-dark;
    cursor: pointer;
  }
}
</style>
