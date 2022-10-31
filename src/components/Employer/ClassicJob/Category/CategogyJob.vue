<template>
  <div class="custom-control">
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

.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 21px;
  margin-bottom: 0.5rem;
  width: 100%;

  input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 13px;
    height: 17px;
    opacity: 0;
    padding: 0;
    &:checked + label {
      background-color: #e7faef !important;
      font-weight: bold;
      color: $accent !important;
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0 4px 10px rgb(77 35 16 / 19%);
    }
  }

  label {
    display: block;
    padding: 0.875rem 1rem;
    text-align: center;
    border: 1px solid $color-border-light;
    color: $color-dark;
    white-space: normal;
    cursor: pointer;
  }
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}
</style>
