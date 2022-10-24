<template>
  <div
    class="subcategory-item"
    :class="{ 'custom-checkbox-btn--success': isActive }"
    @click="activeChange()"
  >
    <input type="radio" :id="id" name="subcategory" :value="value" />
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import activeChange from "@/components/mixins/mixinToggle";
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

.subcategory-item {
  background-color: #f2f3f5;

  input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 13px;
    height: 17px;
    opacity: 0;
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
