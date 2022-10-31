<template>
  <div class="page-filter page-filters__item dropdown">
    <a class="dropdown-toggle" href="#" @click="activeChange()" :class="none">
      <slot name="toggle"></slot>
    </a>
    <div class="page-filter__menu dropdown-menu" :class="{ show: isActive }">
      <div class="dropdown-content">
        <div class="page-filter__options">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="page-filter__menu-footer dropdown-footer">
        <button type="reset" class="btn-clear">CLEAR</button>
        <button class="btn-apply">APPLY</button>
      </div>
    </div>
  </div>
</template>
<script>
import DetailJobs from "./DetailJobs.vue";
import Checkbox from "../common/Checkbox.vue";
import activeChange from "../mixins/mixinToggleBlur.js"
export default {
  components: {
    DetailJobs,
    Checkbox,
  },
  props: {
    none: {
      type: String,
      required: false,
    },
  },
  mixins: [activeChange]
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.page-filter {
  .page-filter__menu {
    width: 315px;

    .dropdown-content {
      padding: 0.9375rem 1.125rem;

      .page-filter__options {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .page-filter__option {
          padding: 0.438rem 0;

          label {
            padding-left: 0.625rem;
          }
        }
      }

      .two-cols {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 0.3125rem;
      }
    }

    .page-filter__menu-footer {
      display: flex;
      align-items: center;
      align-content: center;

      button {
        padding: 0.625rem;
        width: 100%;
        background: $accent;
        border: none;
      }

      .btn-clear {
        background: $color-backgroud-header;
        color: $accent;
        font-weight: $bold;

        &:hover {
          background: #dc3545;
        }
      }

      .btn-apply {
        color: $white;

        &:hover {
          background: #0b9140;
        }
      }
    }
  }

  .dropdown-toggle {
    padding: 0.78125rem 1.5rem 0.90625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $gray-darker;
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;

    span {
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
      text-overflow: ellipsis;
    }

    &::after {
      display: inline-block;
      vertical-align: 0.255em;
      content: "";
      border-top: 5px solid;
      border-right: 5px solid rgba(0, 0, 0, 0);
      border-bottom: 0;
      border-left: 5px solid rgba(0, 0, 0, 0);
    }
  }

  &:hover {
    background: #f3f3f5;
  }

  .sub-cat {
    color: #a0a4ab;

    &:hover {
      background: $color-backgroud-header;
    }
  }

  .sub-cat + .dropdown-menu {
    display: none;
  }

  &::after {
    content: "";
    width: 0.08px;
    height: 24px;
    background-color: #d1daeb;
    display: block;
    position: absolute;
    top: 50%;
    right: 1px;
    transform: translateY(-50%);
    opacity: 0.5;
  }

  &:last-child::after {
    background-color: $color-backgroud-header;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;

  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: $white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 0.5px;
    top: 50px;

    .dropdown-content {
      max-height: 250px;
      color: $gray-darker;
      padding: 0.75rem 1rem;
      text-decoration: none;
      display: block;
      font-size: $regular;
      font-weight: $light;
      overflow: auto;

      .page-filter__option:hover {
        color: $black;
      }
    }
  }

  .show {
    display: block;
  }
}
.previosLast .dropdown-menu {
  right: -70px;
  will-change: transform;
  transform: translate(6vw, 0);
}
.lastChild .dropdown-menu {
  right: 50px;
  will-change: transform;
  transform: translate(6vw, 0);
}
@media screen and (max-width: 768px){
  .previosLast .dropdown-menu {
  right: 4vw;
}
.lastChild .dropdown-menu {
  left: -6vw;
}
}
@media screen and (max-width: 576px) {
  .page-filter .page-filter__menu {
    width: 100%;
  }

  .previosLast .dropdown-menu, .lastChild .dropdown-menu{
    left: -6vw;
  }
}
</style>
