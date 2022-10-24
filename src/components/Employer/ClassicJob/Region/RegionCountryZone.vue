<template>
  <div
    class="country-item"
    :class="{ 'custom-checkbox-btn--success': isActive }"
    @click="activeChange()"
  >
    <input type="checkbox" :name="name" :id="id" :value="value" />
    <label class="nameCountry">{{ value }}</label>
  </div>
</template>
<script>
import activeChange from "@/components/mixins/mixinToggle";
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

.country-item {
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
    background-color: #f2f3f5;
    border: none;
  }
}

.custom-checkbox-btn--success {
  label {
    background-color: #ee542f !important;
    color: $white !important;
    border-color: rgba(0, 0, 0, 0);
    box-shadow: 0 2px 6px rgb(77 35 16 / 15%);
  }
}
</style>
