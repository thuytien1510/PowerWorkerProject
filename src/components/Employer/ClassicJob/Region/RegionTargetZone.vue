<template>
  <div
    class="target-item"
    :class="{ 'custom-checkbox-btn--success': isActive }"
    @click="activeChange()"
  >
    <input type="radio" :name="name" :id="id" />
    <label>
      {{ value }}
    </label>
  </div>
</template>
<script>
import activeChange from "@/components/mixins/mixinToggleBlur";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
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
