<template>
  <div
    class="custom-control"
    :class="{ 'custom-checkbox-btn--success': isActive }"
    @click="activeChange()"
  >
    <input
      type="radio"
      name="cate"
      :id="id"
      class="custom-control-input"
      :value="value"
    />
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import activeChange from "@/components/mixins/mixinToggleBlur.js";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  mixins: [activeChange],
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
