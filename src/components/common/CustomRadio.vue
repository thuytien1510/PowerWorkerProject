<template>
  <div id="radio">
    <slot name="radio"></slot>
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

#radio {
  position: relative;
  display: flex;
  align-items: center;

  label {
    font-size: $base-font-size;
    padding-top: 0.1875rem;
  }
}

[type="radio"]:not(:checked),
[type="radio"]:checked {
  position: absolute;
  left: 0;
  opacity: 0.01;
  border: 1px solid $gray;
}

[type="radio"]:not(:checked) + label,
[type="radio"]:checked + label {
  position: relative;
  padding-left: 1.5em;
  font-size: 1.05em;
  cursor: pointer;
}

/* radio aspect */
[type="radio"]:not(:checked) + label:before,
[type="radio"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.3em;
  width: 13px;
  height: 13px;
  transition: all 0.275s;
  border: 1px solid #b9b5b573;
  border-radius: 50%;
}

[type="radio"]:checked + label:before {
  border: 1px solid $accent;
}

/* checked mark aspect */
[type="radio"]:not(:checked) + label:after,
[type="radio"]:checked + label:after {
  content: "";
  position: absolute;
  left: 0.05em;
  top: 0.4em;
  width: 11px;
  height: 11px;
  transition: all 0.275s;
  vertical-align: middle;
  border-radius: 50%;
  border: 3px solid $accent;
}

[type="radio"]:checked:focus + label:before,
[type="radio"]:not(:checked):focus + label:before {
  box-shadow: 0 0px 3px 2px $accent;
}

[type="radio"]:not(:checked) + label:after {
  opacity: 0;
}

[type="radio"]:checked + label:after {
  opacity: 1;
}
</style>
