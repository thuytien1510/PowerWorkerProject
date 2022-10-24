<template>
  <div id="joblist">
    <div class="container">
      <div class="search">
        <div class="search-top">
          <ul class="nav-search">
            <li class="nav-item active">
              <a href="">Micro Jobs</a>
            </li>
            <li class="nav-item dropdown">
              <span class="nav-link dropdown-toggle">Paid Surveys</span>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="">Bitlabs</a>
                <a class="dropdown-item" href=""
                  >CPX-Research<span id="countcpxsurveys"
                    ><font-awesome-icon
                      icon="fa-solid fa-spinner fa-spin" /></span
                ></a>
                <a class="dropdown-item" href=""
                  >Pollfish<span id="countpollfish"
                    ><font-awesome-icon icon="fa-solid fa-spinner" /></span
                ></a>
                <a class="dropdown-item" href=""
                  >YourSurveys<span id="countyoursurveys"
                    ><font-awesome-icon icon="fa-solid fa-spinner" /></span
                ></a>
                <a class="dropdown-item" href="">Wannads</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <span class="nav-link dropdown-toggle" href="#">Offers</span>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="">AdGate Media</a>
                <a class="dropdown-item" href="">Adscend Media</a>
                <a class="dropdown-item" href="">Ayet Studios</a>
                <a class="dropdown-item" href="">Lootably</a>
                <a class="dropdown-item" href="">OfferToro</a>
                <a class="dropdown-item" href="">RevU</a>
                <a class="dropdown-item" href="">Wannads</a>
              </div>
            </li>
          </ul>
          <div class="btn-layout-group" style="top: 10px; right: 10px">
            <button class="btn-link layout-list layout-list--lg">
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
            </button>
            <button class="btn-link layout-list layout-list--md active">
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
            </button>
            <button class="btn-link layout-list layout-list--sm">
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
              <span class="layout-list__item"></span>
            </button>
          </div>
        </div>
        <div class="search-bottom">
          <SearchDropdown>
            <span slot="toggle"> Job Level </span>
            <template slot="content">
              <div
                class="page-filter__option"
                v-for="joblevel in data.joblevels"
                :key="joblevel.id"
              >
                <Checkbox :forV="'pageFiltersLevel' + joblevel.id"
                  ><template slot="input">
                    <input
                      type="checkbox"
                      name="level"
                      :id="'pageFiltersLevel' + joblevel.id"
                    />
                  </template>
                  {{ joblevel.level }}
                </Checkbox>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown class="custom-scroll">
            <span slot="toggle"> Category </span>
            <template slot="content">
              <div
                class="page-filter__option"
                v-for="category in data.categories"
                :key="category.id"
              >
                <CustomRadio :forV="'pageFiltersCategory' + category.id">
                  <template>
                    <input
                      type="radio"
                      name="category"
                      :id="'pageFiltersCategory' + category.id"
                    />
                  </template>
                  {{ category.opt }}</CustomRadio
                >
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown none="sub-cat">
            <span slot="toggle">Sub Category</span>
          </SearchDropdown>
          <SearchDropdown class="previosLast">
            <span slot="toggle"> Payment </span>
            <template slot="content">
              <div>
                <p><strong>Price Range</strong></p>
                <InputRange></InputRange>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown class="previosLast">
            <span slot="toggle"> Location </span>
            <template slot="content">
              <div class="two-cols">
                <div
                  class="page-filter__option"
                  v-for="location in data.locations"
                  :key="location.id"
                >
                  <Checkbox :forV="'pageFilterLocation' + location.id">
                    <template slot="input">
                      <input
                        type="checkbox"
                        name="location"
                        :id="'pageFilterLocation' + location.id"
                      />
                    </template>
                    {{ location.loca }}</Checkbox
                  >
                </div>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown class="lastChild">
            <span slot="toggle"> Emp. Stats </span>
            <template slot="content">
              <div
                class="page-filter__option"
                v-for="empS in data.empStats"
                :key="empS.id"
              >
                <CustomRadio :forV="'pageFiltersEmpStats' + empS.id">
                  <template>
                    <input
                      type="radio"
                      name="category"
                      :id="'pageFiltersEmpStats' + empS.id"
                    />
                  </template>
                  {{ empS.emp }}
                </CustomRadio>
              </div>
            </template>
          </SearchDropdown>
        </div>
      </div>
      <div id="jobs-content">
        <div class="results">
          <p class="results-bar__total">
            <span id="job-search-results">713</span>results
          </p>
          <div class="results-search">
            <div class="list-filter">
              <input
                type="text"
                class="form-control"
                placeholder="Search job and press enter..."
                value=""
              />
            </div>

            <div class="list-filter dropdown" @click="toggle()">
              <a class="dropdown-toggle dropdown-sortby" href="#">
                Sort by <span class="dropdown-sortby__sep">/</span>
                <span class="dropdown-sortby__selection"> Most Recent </span>
              </a>
              <div class="dropdown-menu" :class="{ show: dropdown }">
                <a class="dropdown-item active">Most Recent</a>
                <a class="dropdown-item">Highest Paying</a>
                <a class="dropdown-item">Crypto Verified Accounts</a>
                <a class="dropdown-item">TTR</a>
                <a class="dropdown-item">Employers followed</a>
              </div>
            </div>
          </div>
        </div>
        <DetailJobs />
        <DetailJobs />
        <DetailJobs />
        <DetailJobs />
        <DetailJobs />
        <DetailJobs />
      </div>
    </div>
  </div>
</template>
<script>
import DetailJobs from "./DetailJobs.vue";
import Checkbox from "../common/Checkbox.vue";
import SearchDropdown from "./SearchDropdown.vue";
import CustomRadio from "../common/CustomRadio.vue";
import InputRange from "../common/InputRange.vue";
export default {
  components: {
    DetailJobs,
    Checkbox,
    SearchDropdown,
    CustomRadio,
    InputRange,
  },
  data() {
    return {
      dropdown: false,
      data: {
        joblevels: [
          {
            id: 1,
            level: "Starter",
          },
          {
            id: 2,
            level: "Advanced",
          },
          {
            id: 3,
            level: "Expert",
          },
        ],
        categories: [
          {
            id: 1,
            opt: "Sign up",
          },
          {
            id: 2,
            opt: "SEO + Promote Content + Search + Engage",
          },
          {
            id: 3,
            opt: "Data Entry, Collection, Extraction",
          },
          {
            id: 4,
            opt: "Telegram",
          },
          {
            id: 5,
            opt: "Discord",
          },
          {
            id: 6,
            opt: "TikTok",
          },
          {
            id: 7,
            opt: "Video Marketing",
          },
          {
            id: 8,
            opt: "Facebook Micro-Influencer",
          },
          {
            id: 9,
            opt: "Twitter Micro-Influencer",
          },
          {
            id: 10,
            opt: "Instagram Micro-Influencer",
          },
          {
            id: 11,
            opt: "Promotion (Voting & Rating)",
          },
          {
            id: 12,
            opt: "Reddit",
          },
          {
            id: 13,
            opt: "Yahoo Answers/Answerbag/Quora...(other)",
          },
          {
            id: 14,
            opt: "Forums",
          },
          {
            id: 15,
            opt: "Computer programs (PC)",
          },
          {
            id: 16,
            opt: "Comment on Other Blogs",
          },
          {
            id: 17,
            opt: "Write an honest review (Service, Product)",
          },
          {
            id: 18,
            opt: "Write an Article",
          },
          {
            id: 19,
            opt: "Mobile Applications (iPhone & Android)",
          },
          {
            id: 20,
            opt: "Blog/Website Owners",
          },
          {
            id: 21,
            opt: "Leads",
          },
          {
            id: 22,
            opt: "Surveys / Offers",
          },
          {
            id: 23,
            opt: "Qualification",
          },
          {
            id: 24,
            opt: "Other",
          },
        ],
        locations: [
          {
            id: 1,
            loca: "Africa",
          },
          {
            id: 2,
            loca: "Arab Countries",
          },
          {
            id: 3,
            loca: "Asia",
          },
          {
            id: 4,
            loca: "Caribbean",
          },
          {
            id: 5,
            loca: "Europe West",
          },
          {
            id: 6,
            loca: "Europe East",
          },
          {
            id: 7,
            loca: "International",
          },
          {
            id: 8,
            loca: "Latin America",
          },
          {
            id: 9,
            loca: "Muslim Countries",
          },
          {
            id: 10,
            loca: "USA & Western",
          },
        ],
        empStats: [
          {
            id: 1,
            emp: "Successful jobs - Low to High",
          },
          {
            id: 2,
            emp: "Successful jobs - High to",
          },
          {
            id: 3,
            emp: "% tasks rated satisfied - Low to High",
          },
          {
            id: 4,
            emp: "% tasks rated satisfied - High to Low",
          },
        ],
      },
    };
  },
  methods: {
    toggle() {
      this.dropdown = !this.dropdown;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

#joblist {
  padding: 47px calc((100% - 1086px) / 2);
  font-family: $base_font_family;
  font-weight: $light;
  font-size: 1rem;
  color: $white;
}

#checkbox label {
  padding-top: 0.25rem;
}

.search {
  margin-bottom: 1.5625rem;

  &-top {
    display: flex;
    border-bottom: 2px solid $accent;
    justify-content: space-between;

    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;

      li {
        display: block;
        padding: 8px 1rem;
        color: $gray;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        &:hover {
          color: $accent;
          background-color: #d9f8dd;
        }

        a {
          font-family: $base_font_family;
          font-weight: $light;
          font-size: 1rem;
          text-decoration: none;
          color: $white;

          &:hover {
            color: $accent;
          }
        }

        .nav-link::after {
          display: inline-block;
          margin-left: 0.255em;
          vertical-align: 0.255em;
          content: "";
          border-top: 5px solid;
          border-right: 5px solid rgba(0, 0, 0, 0);
          border-bottom: 0;
          border-left: 5px solid rgba(0, 0, 0, 0);
        }
      }

      .active {
        background: $accent;
      }

      .dropdown {
        position: relative;
        display: inline-block;

        .dropdown-menu {
          display: none;
          position: absolute;
          background-color: $white;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          margin-top: 0.5rem;

          a {
            color: $black;
            padding: 0.75rem 1rem;
            text-decoration: none;
            display: block;
            font-size: 13px;
            font-weight: $light;

            &:hover {
              color: $accent;
              font-size: 14px;
              font-weight: regular;
            }
          }
        }

        &:hover .dropdown-menu {
          display: block;
        }
      }
    }

    .layout-list {
      padding: 0.3125rem;
      border: none;
      background: $white;

      &:hover .layout-list__item {
        background: #000000;
        opacity: 1;
      }

      .layout-list__item {
        display: block;
        width: 14px;
        height: 2px;
        background-color: $color-title;
        opacity: 0.3;
        border-radius: 1px;
        margin-top: 0.125rem;

        &:first-child {
          margin-top: 0;
        }
      }
    }

    .layout-list--lg .layout-list__item {
      height: 6px;
      margin-top: 0.125rem;
    }

    .layout-list--md .layout-list__item {
      height: 4px;
      margin-top: 0.0625rem;
    }

    .layout-list--sm .layout-list__item {
      margin-top: 0.0625rem;
    }

    .active {
      .layout-list__item {
        background: $black;
        opacity: 1;
      }
    }
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    background: $color-backgroud-header;
  }
}
#jobs-content {
  color: $black;
  font-weight: $light;
  font-size: 14px;
}

.results {
  display: flex;
  justify-content: space-between;

  &-bar__total {
    display: flex;
    align-items: center;
    margin-right: 1.25rem;

    span {
      margin-right: 0.3125rem;
    }
  }

  .results-search {
    .list-filter input:focus {
      border-bottom: 1px solid $accent !important;
    }

    .dropdown {
      position: relative;
      display: inline-block;

      .dropdown-menu {
        display: none;
        position: absolute;
        background-color: $white;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        margin-top: 0.5rem;
        top: 45px;
        min-width: 232px;
        left: 0;
        box-sizing: border-box;

        .dropdown-item {
          display: block;
          width: 100%;
          padding: 0.9375rem 19px;
          font-weight: 400;
          clear: both;
          text-align: inherit;
          white-space: nowrap;
          font-family: $base_font_family;
          font-size: 14px;
          font-weight: 300;
          color: $gray-darker !important;
          text-decoration: none;
          border: none;

          &:hover,
          &:active {
            color: $accent !important;
            font-weight: bold;
          }
        }

        .active {
          color: $accent !important;
          font-weight: bold;
        }

        &:hover .dropdown-menu {
          display: block;
        }
      }

      .show {
        display: block !important;
      }
    }
  }

  &-search {
    display: flex;

    .list-filter {
      padding: 0.625rem 0 0.6875rem 0.75rem;

      input {
        outline: none;
        padding: 0.625rem 0.6875rem 0.75rem;
        border: none;
        background: $color-backgroud-header;

        &:focus {
          border-bottom: 1px solid $accent !important;
        }
      }

      .form-control:focus {
        border: none;
        border-bottom: 1px solid $accent !important;
      }

      &:last-child {
        display: flex;
        align-items: center;
        font-weight: 600;
        padding-left: 1.438rem;

        a {
          text-decoration: none;
          color: $black;

          span {
            color: $gray;
          }

          .dropdown-sortby__selection {
            color: $accent;
            font-weight: $bold;

            &::after {
              color: #a8b0bf;
              vertical-align: middle;
              margin-top: -0.125rem;
              display: inline-block;
              margin-left: 0.255em;
              content: "";
              border-top: 5px solid;
              border-right: 5px solid rgba(0, 0, 0, 0);
              border-bottom: 0;
              border-left: 5px solid rgba(0, 0, 0, 0);
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .search {
    &-bottom {
      flex-wrap: wrap;
      justify-content: flex-start;

      .dropdown {
        max-width: 20%;
        display: block;

        .dropdown-toggle span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .results {
    justify-content: center;

    &-search {
      flex-wrap: wrap;

      .list-filter {
        display: flex;
        width: 100%;

        * {
          width: 100%;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .search {
    &-bottom {
      .dropdown {
        max-width: none;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .search {
    &-bottom {
      .page-filter {
        width: 100%;
        border-bottom: 1px solid #e2e8f4;

        &::after {
          background-color: $color-backgroud-header;
        }
      }
    }
  }
}
</style>
