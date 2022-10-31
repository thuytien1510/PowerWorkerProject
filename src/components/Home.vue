<template>
  <div id="home">
    <div class="container">
      <header>
        <div class="nav-header">
          <div class="brand">
            <a href="#"><img src="../assets/img/home/logo-sg.svg" alt="" /></a>
          </div>
          <nav class="navbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="" class="nav-link">
                  <span>Explore Gigs</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  <span>Affiliate Program</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  <span>Freelance & Earn</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="auth">
            <router-link :to="{ name: 'login'}" class="login">Log In</router-link>
            <router-link :to="{ name: 'signup'}" class="signup">Sign Up</router-link>
          </div>
          <div class="bar-icon" @click="showMenu()">
            <span class="material-symbols-outlined"> menu </span>
          </div>
        </div>
      </header>
      <transition name="slide">
        <div class="side-nav side-nav--active" v-show="show">
          <div class="side-nav__inner">
            <div class="side-nav__header">
              <span
                class="material-symbols-outlined close"
                @click="show = false"
              >
                close
              </span>
            </div>
            <div class="side-nav__body">
              <ul class="nav-items">
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <span>Explore Gigs</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <span>Affiliate Program</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <span>Freelance & Earn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/css/style.scss';

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $base_font_family;
  box-shadow: inset -0.625rem 0px 1.25rem -0.625rem rgba(148, 94, 94, 0.4);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.nav-header {
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 calc((100% - 1086px) / 2);

  .brand {
    padding: 1.688rem 0.9375rem 1.063rem 0;
  }

  .navbar {
    width: 480px;

    .navbar-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;

      .nav-item {
        list-style-type: none;
        align-items: center;

        .nav-link {
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9375rem;
          color: rgb(32, 50, 89);
          font-family: $base_font_family;

          :after {
            display: block;
            content: "";
            border-bottom: solid 2px $accent;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
          }

          :hover:after {
            transform: scaleX(1);
          }
        }
      }
    }
  }

  .auth {
    display: flex;

    a {
      padding: 0.375rem 0.75rem;
      font-weight: 500;
      color: $white;
    }

    .login {
      font-weight: 400;
      margin-right: 1rem;
      color: $light-accent;
      display: flex;
      align-items: center;

      &:hover {
        color: #09642d;
      }

      &:focus {
        border: 2px solid #29cd73a1;
        border-radius: 5px;
        opacity: 0.2px;
      }
    }

    .signup {
      background-color: $light-accent;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }

  .bar-icon {
    display: none;
  }
}

.side-nav {
  width: 300px;
  position: fixed;
  height: 100%;
  top: 0;
  background: #fff;
  z-index: 22;
  box-shadow: 0 8px 20px 0 rgb(97 44 21 / 19%);
  -webkit-transition: 0.25s all ease-in-out;
  transition: 0.25s all ease-in-out;

  &__inner {
    display: flex;
    flex-direction: column;

    .side-nav__header {
      text-align: end;

      span {
        cursor: pointer;
        color: #a8b0bf;
        font-size: 1.875rem;
        margin: 1.375rem;

        &:hover {
          color: $accent;
        }

        &:active {
          border: 2px solid rgba($color: $light-accent, $alpha: 0.3);
          padding: 0.375rem;
          border-radius: 3px;
        }
      }
    }

    .side-nav__body {
      .nav-items {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin: 0;
        padding-left: 0.9375rem;
        align-items: flex-start;

        .nav-item {
          padding: 0.625rem 0;
          padding-left: 0.625rem;

          .nav-link {
            display: block;
            transition: 0.3s;
            color: rgb(27, 27, 27);
            font-size: 1.063rem;
            font-weight: $regular;
          }
        }
      }
    }
  }
}

.side-nav--active {
  right: 0;
}

@media screen and (max-width: 991.98px) {
  .nav-header {
    .navbar {
      display: none;
    }

    .auth {
      margin-left: auto;
    }

    .bar-icon {
      display: block;
      margin-left: 0.9375rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #aaa;
      border: 1px solid rgb(233, 228, 228);
      padding: 0.3rem 0.375rem;
    }
  }
}
</style>
