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
                <div class="nav-link">
                  <span>
                    Gigs <font-awesome-icon icon="fa-solid fa-caret-down" />
                  </span>
                  <sup class="symbol symbol--warning">New</sup>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link"
                  ><span @click="toggle()"
                    >MicroJobs
                    <font-awesome-icon icon="fa-solid fa-caret-down" /></span
                ></a>
                <div
                  class="dropdown-menu"
                  :class="{ show: dropdown }"
                  v-if="isChange"
                >
                  <span @click="dropdown = false">
                    <router-link
                      :to="{ name: 'joblist' }"
                      class="dropdown-item space active"
                      >Find Jobs</router-link
                    >
                  </span>

                  <a class="dropdown-item space"
                    ><span>Finished Tasks</span> <span>0</span></a
                  >
                  <hr />
                  <div class="dropdown-item micro-job">
                    <div class="disble">
                      <strong>satisfied + paid</strong>
                      <strong>0</strong>
                    </div>
                    <div class="disble">
                      <strong>pending review</strong>
                      <strong>0</strong>
                    </div>
                  </div>
                </div>
                <div class="dropdown-menu" :class="{ show: dropdown }" v-else>
                  <router-link
                    :to="{ name: 'region' }"
                    class="dropdown-item space"
                    ><span @click="dropdown = false"
                      >Post Jobs</span
                    ></router-link
                  >
                  <a class="dropdown-item space"
                    ><span>My Jobs</span> <span>0</span></a
                  >
                  <hr />
                  <div class="dropdown-item">
                    <div class="space disble">
                      <strong>tasks to rate</strong>
                      <strong>0</strong>
                    </div>
                    <div class="space disble">
                      <strong>pending admin review</strong>
                      <strong>0</strong>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link"><span>Wallet</span></a>
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
                <a class="nav-link">
                  <font-awesome-icon icon="fa-regular fa-circle-question" />
                </a>
              </li>
              <li class="nav-item dropdown navbar__dropdown">
                <div class="nav-link notificationDropdown">
                  <font-awesome-icon icon="fa-regular fa-bell" />
                </div>
              </li>
              <li class="nav-item dropdown navbar__dropdown navbar__logs">
                <a class="nav-link">
                  <font-awesome-icon icon="fa-solid fa-history" />
                </a>
                <div class="dropdown-menu"></div>
              </li>
            </ul>
            <div class="bar-icon" @click="showMenu()">
              <span class="material-symbols-outlined"> menu </span>
            </div>
            <ul class="navbar-nav">
              <li
                class="nav-item navbar-nav__profile dropdown profile-dropdown"
              >
                <a class="nav-link" href="#" @click="activeChange()">
                  <div>
                    <img src="../assets/img/profile_no_image.gif" alt="" />
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  :class="{ show: isActive }"
                >
                  <span class="profile-dropdown__name"
                    >Hello, {{ username }}</span
                  >
                  <span class="dropdown-hr"></span>
                  <a class="dropdown-item">Account Settings</a>
                  <a class="dropdown-item">My Profile</a>
                  <a class="dropdown-item">Workers ranking</a>
                  <a class="dropdown-item">FAQ</a>
                  <a class="dropdown-item">Share &amp; Earn</a>
                  <a class="dropdown-item" @click="logout">Logout</a>
                </div>
              </li>
            </ul>
            <div class="dark-mode">
              <font-awesome-icon icon="fa-solid fa-moon" />
            </div>
            <button class="btn-post-job">
              <router-link :to="{ name: 'joblist' }" v-if="isChange"
                >Finds Job
              </router-link>
              <router-link :to="{ name: 'region' }" v-else
                >Post Job
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
                  <a class="nav-link">
                    <img src="../assets/img/profile_no_image.gif" alt="" />
                    <span>Hello, {{ username }}</span>
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
                <a class="nav-link switch-profile-text" >
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
                    <a class="nav-link list-group-header">
                      Gigs&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" />&nbsp;&nbsp;
                      <span class="symbol symbol--warning">New</span>
                    </a>
                    <div
                      class="collapse"
                      id="gigs-submenu"
                      style="display: none"
                    >
                      <a class="list-group-item">Browse Gigs</a>
                      <a
                        class="list-group-item"
                        style="width: fit-content"
                      >
                        My Posted Gigs
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="list-group">
                    <a class="nav-link list-group-header">
                      MicroJobs&nbsp;&nbsp;<font-awesome-icon
                        icon="fa-solid fa-caret-down"
                      />
                    </a>
                    <div
                      class="collapse"
                      id="microjobs-submenu"
                      style="display: none"
                    >
                      <a class="list-group-item">Find Jobs</a>
                      <a class="list-group-item"
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
                  <a class="nav-link">Wallet</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Account Settings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Workers ranking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Support Tickets</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link notificationDropdown"
                    >Notifications</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link">Logs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Share &amp; Earn</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="logout">Logout</a>
                </li>
              </ul>
            </div>
            <div class="side-nav__footer">
              <router-link :to="{ name: 'joblist' }" v-if="isChange"
                >Finds Job
              </router-link>
              <router-link :to="{ name: 'region' }" v-else
                >Post Job
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import activeChange from "./mixins/mixinToggleBlur";
export default {
  mixins: [activeChange],
  data() {
    return {
      show: false,
      isChange: false,
      dropdown: false,
      username: "",
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    },
    async change() {
      this.isChange = !this.isChange;
      this.$swal.fire({
        position: "center-center",
        icon: "success",
        title: "Switch success",
        showConfirmButton: false,
        timer: 1500,
      });
      let res = await axios.post("/api/users/switch-role");
      console.log(this.$route.name);
      console.log(res);
    },
    toggle() {
      this.dropdown = !this.dropdown;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false;
        this.isActive = false;
      }
    },
  },
  updated() {
    if (this.isChange) {
      this.$router.push({ name: "joblist" }).catch(() => {});
    }
  },
  async mounted() {
    try {
      const res = await axios.get("/api/users/info");
      this.username = res.data.data.username;
      console.log(res.data.data.role);
      if (res.data.data.role == "WORKER") {
        this.isChange = true;
      }
    } catch (error) {}
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

.active {
  font-weight: $bold !important;
}
.space {
  display: flex !important;
  justify-content: space-between;
  padding: 0.3125rem 1.0625rem;
  margin: 0.1875rem;
  font-size: 0.9375rem !important;
  &:hover {
    color: $black !important;
    font-weight: $bold;
  }
}
.micro-job {
  &:hover {
    color: $black !important;
    font-size: 0.875rem !important;
  }
}
.disble {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  opacity: 0.5;
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

      .nav-link {
        display: flex;
        padding: 0.3125rem 0.9375rem;
        font-weight: 500;
        color: #30394d;
      }

      .profile-dropdown__name {
        padding: 0.625rem 1.25rem;
        padding-top: 0.8rem;
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
    background-color: $white;
    min-width: 232px;
    box-shadow: 0px 8px 1rem 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 0.5rem;
    top: 43px;
    left: -25px;

    .dropdown-item {
      color: black;
      padding: 0.75rem 1rem !important;
      display: block;
      font-size: 0.875rem;

      &:hover {
        color: $accent;
        font-size: 0.9rem;
        font-weight: $bold !important;
      }
    }
  }
  .dropdown-menu-right {
    left: -155px;
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

        .nav-item {
          padding: 0.625rem 0;
          padding-left: 0.625rem;

          .nav-link {
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
      position:absolute;
      bottom: 0;
      margin: 1.25rem;
      margin-right: 5rem;
      padding: 0.9375rem 0;
      text-align: center;
      background: $accent;
      width: 87%;

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
  