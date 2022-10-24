<template>
  <div id="checkbox">
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

#checkbox {
  position: relative;
  display: flex;
  align-items: center;

  label {
    font-size: $base-font-size;
    padding-top: 3px;
  }
}

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: 0;
  opacity: 0.01;
  border: 1px solid $gray;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.5em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.3em;
  width: 12px;
  height: 12px;
  transition: all 0.275s;
  border: 1px solid #b9b5b573;
  border-radius: 2px;
}

[type="checkbox"]:checked + label:before {
  border: 1px solid $accent;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  left: 0.15em;
  top: 0.43em;
  width: 8px;
  height: 8px;
  background: $accent;
  transition: all 0.275s;
  vertical-align: middle;
}

[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  box-shadow: 0 0px 3px 2px $accent;
}

[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
}

[type="checkbox"]:checked + label:after {
  opacity: 1;
}
</style>
