<template>
  <div id="homeUser">
    <div class="container">
      <header>
        <div class="nav-header">
          <div class="brand">
            <a href="#"><img src="../assets/img/home/logo-sg.svg" alt="" /></a>
          </div>
          <nav class="navbar">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="">
                  <span>
                    Gigs <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </span>
                  <sup class="symbol symbol--warning">New</sup>
                </a>
                <div class="dropdown-menu" style="display: none">
                  <a class="dropdown-item" href="">Browse Gigs</a>
                  <a class="dropdown-item" href=""> My Posted Gigs </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link" :to="{ name: 'joblist'}"
                  ><span
                    >MicroJobs
                    <font-awesome-icon icon="fa-solid fa-caret-down" /></span
                ></router-link>
                <div class="dropdown-menu" style="display: none">
                  <a class="dropdown-item" href="">Find Jobs</a>
                  <a class="dropdown-item" href=""
                    >Finished Tasks <span>0</span></a
                  >
                  <hr />
                  <div class="dropdown-item">
                    <div>
                      <strong>satisfied + paid</strong>
                      <span>0</span>
                    </div>
                    <div>
                      <strong>pending review</strong>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=""><span>Wallet</span></a>
              </li>
            </ul>
          </nav>
          <div class="auth">
            <ul class="navbar-nav">
              <a class="nav-link" href="#">
                <span>employer</span>
                <div
                  class="zawp-toggle"
                  :class="{ 'zawp-toggle--checked-last': isChange }"
                  @click="change"
                >
                  <span class="zawp-toggle__switch"></span>
                </div>
                <span>worker</span>
              </a>
              <li class="nav-item">
                <a class="nav-link" href="">
                  <font-awesome-icon icon="fa-regular fa-circle-question" />
                </a>
              </li>
              <li class="nav-item dropdown navbar__dropdown">
                <a class="nav-link notificationDropdown" href="#">
                  <font-awesome-icon icon="fa-regular fa-bell" />
                </a>
                <div
                  class="
                    notifications
                    dropdown-menu dropdown-menu-right
                    custom-scrollbar-css
                  "
                  style="display: none"
                >
                  <div class="notifications__inner">
                    <span class="notification"
                      >You don't have any notifications at the moment.</span
                    >
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown navbar__dropdown navbar__logs">
                <a class="nav-link" href="#">
                  <font-awesome-icon icon="fa-solid fa-history" />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right custom-scrollbar-css"
                  style="display: none"
                >
                  <div class="dropdown-item">
                    <span class="logs-dd__desc"
                      >You created an account - Welcome to SproutGigs!</span
                    >
                    <br />
                    <span class="logs-dd__time">Oct 12, 2022 at 02:05</span>
                  </div>
                  <div class="see-all">
                    <a href="/user-history.php#log-tab">See all</a>
                  </div>
                </div>
              </li>
            </ul>
            <div class="bar-icon" @click="showMenu()">
              <span class="material-symbols-outlined"> menu </span>
            </div>
            <ul class="navbar-nav">
              <li
                class="nav-item navbar-nav__profile dropdown profile-dropdown"
              >
                <a class="nav-link" href="#" @click="toggle()">
                  <div>
                    <img src="../assets/img/profile_no_image.gif" alt="" />
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  :class="{ show: dropdown }"
                >
                  <span class="profile-dropdown__name">Hello, tien</span>
                  <span class="dropdown-hr"></span>
                  <a class="dropdown-item" href="">Account Settings</a>
                  <a class="dropdown-item" href="">My Profile</a>
                  <a class="dropdown-item" href="">Workers ranking</a>
                  <a class="dropdown-item" href="">FAQ</a>
                  <a class="dropdown-item" href="">Share &amp; Earn</a>
                  <a class="dropdown-item" href="" @click="logout">Logout</a>
                </div>
              </li>
            </ul>
            <div class="dark-mode">
              <font-awesome-icon icon="fa-solid fa-moon" />
            </div>
            <button class="btn-post-job">
              <router-link :to="{ name: 'region'}"
                >{{ isChange ? "Finds Job" : "Post Job" }}
              </router-link>
            </button>
          </div>
        </div>
      </header>
      <transition name="slide">
        <div class="side-nav side-nav--active" v-show="show">
          <div class="side-nav__inner">
            <div class="side-nav__header">
              <ul class="nav">
                <li class="nav-item navbar-nav__profile">
                  <a class="nav-link" href="#">
                    <img src="../assets/img/profile_no_image.gif" alt="" />
                    <span>Hello, tien</span>
                  </a>
                </li>
              </ul>
              <span
                class="material-symbols-outlined close"
                @click="show = false"
              >
                close
              </span>
            </div>
            <div class="side-nav__switch">
              <li class="nav-item">
                <a class="nav-link switch-profile-text" href="#">
                  <span>employer</span>
                  <div
                    class="zawp-toggle"
                    :class="{ 'zawp-toggle--checked-last': isChange }"
                    @click="change"
                  >
                    <span class="zawp-toggle__switch"></span>
                  </div>
                  <span>worker</span>
                </a>
              </li>
            </div>
            <div class="side-nav__body">
              <ul class="nav-items">
                <li class="nav-item">
                  <div class="list-group">
                    <a href="#gigs-submenu" class="nav-link list-group-header">
                      Gigs<font-awesome-icon icon="fa-solid fa-caret-down" />
                      <span class="symbol symbol--warning">New</span>
                    </a>
                    <div
                      class="collapse"
                      id="gigs-submenu"
                      style="display: none"
                    >
                      <a class="list-group-item" href="">Browse Gigs</a>
                      <a
                        class="list-group-item"
                        href=""
                        style="width: fit-content"
                      >
                        My Posted Gigs
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="list-group">
                    <a href="" class="nav-link list-group-header">
                      MicroJobs<font-awesome-icon
                        icon="fa-solid fa-caret-down"
                      />
                    </a>
                    <div
                      class="collapse"
                      id="microjobs-submenu"
                      style="display: none"
                    >
                      <a class="list-group-item" href="">Find Jobs</a>
                      <a class="list-group-item" href=""
                        >Finished Tasks <span>0</span></a
                      >
                      <span class="list-group-item"
                        >satisfied + paid <span>0</span></span
                      >
                      <span class="list-group-item"
                        >pending review <span>0</span></span
                      >
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Wallet</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Account Settings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Workers ranking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Support Tickets</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link notificationDropdown" href=""
                    >Notifications</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Logs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Share &amp; Earn</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Logout</a>
                </li>
              </ul>
            </div>
            <div class="side-nav__footer">
              <a href="">Find Jobs</a>
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
      isChange: true,
      dropdown: false,
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    },
    change() {
      this.isChange = !this.isChange;
    },
    toggle() {
      this.dropdown = !this.dropdown;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
@import "../assets/css/style.scss";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $base_font_family;
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

#homeUser {
  background: $color-backgroud-header;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}

.nav-header {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc((100% - 1280px) / 2);

  .brand {
    padding: 1rem 0 1.063rem;
  }

  .navbar {
    .navbar-nav {
      display: flex;
      align-items: center;
      padding: 0;
      width: 100%;

      .nav-item {
        align-items: center;

        .nav-link {
          text-decoration: none;
          font-weight: 500;
          color: #30394d;
          display: flex;
          padding: 0.5rem 1.5rem;

          sup {
            position: relative;
            font-size: 0.625rem;
            margin: 0 0.125rem 0.125rem;
            top: -8px;

            &::after {
              border: none;
            }
          }

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
    align-items: center;

    ul {
      display: flex;
      padding: 0;

      .profile-dropdown img {
        border-radius: 50%;
        width: 28px;
        height: 28px;
        vertical-align: middle;
        border-style: none;
        align-items: center;
      }

      a {
        display: flex;
        padding: 0.3125rem 0.9375rem;
        font-weight: 500;
        color: #30394d;
      }

      .profile-dropdown__name {
        padding: 0.625rem 1.25rem;
        display: block;
        margin-bottom: 0.3125rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        color: #212529;
      }

      .dropdown-hr {
        border-bottom: 1px solid #f2f4f7;
        display: block;
        margin-bottom: 0.3125rem;
      }
    }

    .bar-icon {
      display: none;
    }

    .dark-mode {
      color: $gray-darker;
      cursor: pointer;
      padding: 0 0.5rem;
    }

    .btn-post-job {
      border: none;
      background: $accent;
      border-radius: 1px;
      margin-left: 1.5rem;
      padding: 0.75rem 2.313rem;

      a {
        color: $white;
        font-size: 1rem;
        font-weight: $bold;
        text-transform: uppercase;
      }
    }
  }
}

.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-menu {
    width: 200px;
    display: none;
    position: absolute;
    left: -155px;
    background-color: $white;
    min-width: 160px;
    box-shadow: 0px 8px 1rem 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 0.5rem;

    a {
      color: black;
      padding: 0.75rem 1rem !important;
      display: block;
      font-size: 13px;
      font-weight: $light !important;

      &:hover {
        color: $accent;
        font-size: 0.875rem;
        font-weight: $regular;
      }
    }
  }

  .show {
    display: block;
  }
}

.side-nav {
  width: 300px;
  position: fixed;
  height: 100%;
  top: 0;
  background: #fff;
  z-index: 22;
  box-shadow: 0 8px 1.25rem 0 rgb(97 44 21 / 19%);
  -webkit-transition: 0.25s all ease-in-out;
  transition: 0.25s all ease-in-out;

  &__inner {
    display: flex;
    flex-direction: column;

    .side-nav__header {
      text-align: end;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .nav {
        color: $color-dark;
        padding-left: 1.563rem;

        .nav-link {
          display: flex;
          align-items: center;
          text-align: left;

          img {
            height: 28px;
            width: 28px;
            margin-right: 1rem;
          }

          span {
            font-family: $base_font_family;
            color: $color-dark;
            font-size: 1rem;
            margin: 0;
          }
        }
      }

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

    .side-nav__switch li a {
      display: flex;
      align-items: center;
      color: $color-dark;
      padding: 1rem 1.563rem;
    }

    .side-nav__body {
      .nav-items {
        margin: 0;
        padding-left: 0.9375rem;

        li {
          padding: 0.625rem 0;
          padding-left: 0.625rem;

          a {
            display: block;
            transition: 0.3s;
            color: rgb(27, 27, 27);
            font-size: 1.063;
            font-weight: 400;
          }
        }
      }
    }

    .side-nav__footer {
      margin: 1.25rem;
      padding: 0.9375rem 0;
      text-align: center;
      background: $accent;

      a {
        color: $white;
        font-weight: $bold;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 1px;
      }
    }
  }
}

.symbol {
  max-height: 1rem;
}

.side-nav--active {
  right: 0;
}

@media screen and (max-width: 1129.98px) {
  .nav-header .navbar .navbar-nav .nav-item a {
    padding: 8px 0.9375rem !important;
  }
}

@media screen and (max-width: 991.98px) {
  .nav-header {
    .navbar {
      display: none;
    }

    .auth {
      .bar-icon {
        display: block;
        margin-left: 0.9375rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #aaa;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0.25rem 0.344rem;
      }

      ul {
        display: none;
      }

      .btn-post-job {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .nav-header {
    .auth {
      .dark-mode {
        display: none;
      }
    }
  }
}
</style>
  