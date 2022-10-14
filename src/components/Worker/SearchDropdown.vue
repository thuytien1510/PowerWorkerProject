<template>
  <div class="page-filter page-filters__item dropdown ">
    <a class="dropdown-toggle" href="#" @click="toggleSearch()" :class="none">
      <slot name="toggle"></slot>
    </a>
    <div class="page-filter__menu dropdown-menu" :class="{show: drop}">
      <div class="dropdown-content">
        <div class="page-filter__options">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="page-filter__menu-footer dropdown-footer">
        <button class="btn-clear">CLEAR</button>
        <button class="btn-apply">APPLY</button>
      </div>
    </div>
  </div>
</template>
<script>
import DetailJobs from './DetailJobs.vue'
import Checkbox from '../common/Checkbox.vue';
export default {
  components: {
    DetailJobs,
    Checkbox
  },
  props: {
    none: String
  },
  data() {
    return {
      drop: false,
    }
  },
  methods: {
    toggleSearch() {
      this.drop = !this.drop;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.drop = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';

.page-filter {
  .page-filter__menu {
    width: 339px;

    .dropdown-content {
      padding: 15px 18px;

      .page-filter__options {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .page-filter__option {
          padding: 7px 0;

          label {
            padding-left: 10px;
          }
        }
      }

      .two-cols {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 5px;
      }
    }

    .page-filter__menu-footer {
      display: flex;
      align-items: center;
      align-content: center;

      button {
        padding: 10px;
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
    padding: 12.5px 24px 14.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #686d77;
    font-size: 14px;
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

  .sub-cat+.dropdown-menu {
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
    background-color: #f5f7fa;
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
    margin-top: 8px;

    .dropdown-content {
      max-height: 250px;
      color: #6b6666;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-size: 14px;
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
</style>
