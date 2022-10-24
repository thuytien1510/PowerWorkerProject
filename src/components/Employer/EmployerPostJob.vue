<template>
  <div id="postjob">
    <div class="container">
      <h2>Post Job</h2>
      <div class="main">
        <ul class="nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" id="classic-job-tab" href=""
              >Classic Job</a
            >
            <font-awesome-icon icon="fa-solid fa-circle-info" />
          </li>
          <li class="nav-item">
            <a class="nav-link" id="list-job-tab" href="">List Job</a>
            <font-awesome-icon icon="fa-solid fa-circle-info" />
          </li>
        </ul>
        <div class="content-classic-job">
          <div class="content-left">
            <router-view></router-view>
            <router-link
              tag="button"
              class="btn-next"
              :to="{ name: 'category' }"
            >
              Apply and go to next
            </router-link>
          </div>
          <EmployerSummaryJob />
        </div>
      </div>
      <div class="steps-bar" id="postJobStepsBar">
        <div class="steps-bar__inner">
          <router-link
            :to="{ name: 'region' }"
            class="steps-bar__nav"
            :class="{ 'steps-bar__nav--disabled': !isNext }"
            ><font-awesome-icon icon="fa-solid fa-chevron-left" /><span
              @click="next()"
              >Back</span
            ></router-link
          >
          <ul class="steps-bar__ul">
            <li
              class="steps-bar__step steps-bar__step--focus"
              :class="{ 'steps-bar__step--complete': isNext }"
            >
              <div class="steps-bar__step-icon">
                <span>Region</span>
              </div>
            </li>

            <li
              class="steps-bar__step"
              :class="{ 'steps-bar__step--focus': isNext }"
            >
              <div class="steps-bar__step-icon">
                <span>Category</span>
              </div>
            </li>

            <li class="steps-bar__step">
              <div class="steps-bar__step-icon">
                <span>Proofs</span>
              </div>
            </li>

            <li class="steps-bar__step">
              <div class="steps-bar__step-icon">
                <span>Settings</span>
              </div>
            </li>

            <li class="steps-bar__step">
              <div class="steps-bar__step-icon">
                <span>Promotion</span>
              </div>
            </li>
          </ul>
          <router-link :to="{ name: 'category' }" class="steps-bar__nav"
            ><span @click="next()">Next</span>
            <font-awesome-icon icon="fa-solid fa-chevron-right"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EmployerSummaryJob from "./EmployerSummaryJob.vue";
export default {
  components: {
    EmployerSummaryJob,
  },
  data() {
    return {
      isNext: false,
    };
  },
  methods: {
    next() {
      this.isNext = !this.isNext;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

#postjob {
  padding: 48px calc((100% - 1086px) / 2);
  font-weight: $light;
}

h2 {
  margin-bottom: 2rem;
}

.main {
  .nav-tabs {
    border-bottom: 2px solid $color-border-light;
    margin-bottom: 1.5rem !important;
    padding-left: 0;
    display: flex;
    margin-top: 0;

    .nav-item {
      display: flex;
      margin-right: 2.625rem;
      margin-bottom: -0.125rem;

      .nav-link {
        margin-right: 0.6875rem;
        padding: 0 0 1.188rem;
        border-radius: 0;
        border: 0;
        text-transform: uppercase;
        display: inline-block;
        font-weight: 500;
        border-bottom: 2px solid $color-border-light;
        color: $color-title;

        &:hover {
          border-color: $accent;
        }
      }

      .active {
        border-color: $accent;
      }
    }
  }

  .content-classic-job {
    display: grid;
    grid-template-columns: 8fr 4fr;
    width: 100%;
    padding-bottom: 2rem;

    .content-left {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .btn-next {
        display: block;
        cursor: pointer;
        text-transform: uppercase;
        padding: 0.75rem 1.25rem;
        font-size: 14px;
        border-radius: 1px;
        color: $white;
        background-color: $accent;
        font-weight: bold;
        border: none;
        width: fit-content;
        align-self: center;
      }
    }
  }
}

.steps-bar {
  background: $color-backgroud-header;
  padding: 2.188rem 1.25rem;
  margin-bottom: 3.125rem;

  .steps-bar__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;

    a {
      text-decoration: none;
      cursor: pointer;
      font-weight: 400;
      display: inline-block;
      line-height: 33px;
      color: $color-dark;
      font-size: 1rem;

      span {
        padding: 0 0.5rem;
      }
    }

    .steps-bar__nav--disabled {
      opacity: 0.4;
      pointer-events: visible;
    }

    .steps-bar__ul {
      flex-grow: 1;
      display: flex;
      margin: 0;
      padding: 0 0.625rem;
      justify-content: center;

      .steps-bar__step {
        flex-grow: 1;
        position: relative;
        height: 14px;
        width: 14px;
        min-width: 14px;
        margin-top: -0.9375rem;

        &:last-child {
          flex-grow: 0;
        }

        &::after {
          content: "";
          background-color: $color-border-light;
          position: absolute;
          width: 100%;
          height: 1px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .steps-bar__step-icon {
          content: "";
          height: 14px;
          width: 14px;
          border: 1px solid $color-border-light;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-color: $color-backgroud-header;
          overflow: visible;
          border-radius: 50%;

          span {
            position: absolute;
            top: 100%;
            margin-top: 0.3125rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.75rem;
            color: $color-border-light;
          }
        }
      }

      .steps-bar__step--focus {
        .steps-bar__step-icon,
        .steps-bar__step--complete .steps-bar__step-icon {
          border-color: $accent;
          height: 28px;
          width: 28px;
          margin-top: -0.438rem;
          margin-left: -0.438rem;
          z-index: 2;

          span {
            color: $accent;
          }
        }
      }

      .steps-bar__step--complete {
        .steps-bar__step-icon {
          background: url(../../assets/img/sprite.svg) no-repeat;
          background-color: $accent;
          background-position: 47.619047619% 0;
        }

        &::after {
          background-color: $accent;
        }
      }
    }
  }
}

@media screen and (max-width: 767.98px) {
  .main {
    .content-classic-job {
      grid-template-columns: 1fr;
      display: inline-block;

      .content-left {
        padding-bottom: 2rem;
      }
    }
  }
}

@media screen and (max-width: 499.98px) {
  .steps-bar
    .steps-bar__inner
    .steps-bar__ul
    .steps-bar__step
    .steps-bar__step-icon
    span {
    display: none;
  }
}
</style>
