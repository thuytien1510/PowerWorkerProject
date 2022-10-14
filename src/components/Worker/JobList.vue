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
                <a class="dropdown-item" href="">CPX-Research<span id="countcpxsurveys"><i
                      class="fas fa-spinner fa-spin"></i></span></a>
                <a class="dropdown-item" href="">Pollfish<span id="countpollfish"><i
                      class="fas fa-spinner fa-spin"></i></span></a>
                <a class="dropdown-item" href="">YourSurveys<span id="countyoursurveys"><i
                      class="fas fa-spinner fa-spin"></i></span></a>
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
            <span slot="toggle">
              Job Level
            </span>
            <template slot="content">
              <div class="page-filter__option">
                <Checkbox name="level" id="pageFiltersCategory-starter">Starter</Checkbox>
              </div>
              <div class="page-filter__option">
                <Checkbox name="level" id="pageFiltersCategory-advanced">Advanced</Checkbox>
              </div>
              <div class="page-filter__option">
                <Checkbox name="level" id="pageFiltersCategory-expert">Expert</Checkbox>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown>
            <span slot="toggle">
              Category
            </span>
            <template slot="content">
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory1">Sign up</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory2">SEO + Promote Content + Search + Engage</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory3">Data Entry, Collection, Extraction</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory4">Telegram</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory5">Discord</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory16">TikTok</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory7">Video Marketing</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory8">Facebook Micro-Influencer</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory9">Twitter Micro-Influencer</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory10">Instagram Micro-Influencer</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory11">Promotion (Voting &amp;Rating)</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory12">Reddit</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory13">Yahoo Answers/Answerbag/Quora...(other)</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory14">Forums</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory15">Computer programs (PC)</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory16">Comment on Other Blogs</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory17">Write an honest review (Service, Product)</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory18">Write an Article</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory19">Mobile Applications (iPhone &amp;Android)</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory20">Blog/Website Owners</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory21">Leads</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory22">Surveys / Offers</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory23">Qualification</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersCategory24">Other</CustomRadio>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown none="sub-cat">
            <span slot="toggle">Sub Category</span>
          </SearchDropdown>
          <SearchDropdown>
            <span slot="toggle">
              Payment
            </span>
            <template slot="content">
              <div>
                <p><strong>Price Range</strong></p>
                <InputRange></InputRange>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown>
            <span slot="toggle">
              Location
            </span>
            <template slot="content">
              <div class="two-cols">
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategoryafrica1">Africa</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategoryarab1">Arab Countries</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategoryasia1">Asia</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategorycaribbean1">Caribbean</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategoryeurope1">Europe West</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategoryeurope2">Europe East</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategoryint">International</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategorylatin">Latin America</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategorymuslim">Muslim Countries</Checkbox>
                </div>
                <div class="page-filter__option">
                  <Checkbox name="location" id="pageFiltersSubCategorywest1">USA &amp; Western</Checkbox>
                </div>
              </div>
            </template>
          </SearchDropdown>
          <SearchDropdown>
            <span slot="toggle">
              Emp. Stats
            </span>
            <template slot="content">
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersEmpStatsjobs-low">Successful jobs - Low to High</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersEmpStatsjobs-high">Successful jobs - High to
                  Low</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersEmpStatssatisfied-low">% tasks rated satisfied -
                  Low to High</CustomRadio>
              </div>
              <div class="page-filter__option">
                <CustomRadio name="category" id="pageFiltersEmpStatssatisfied-high">% tasks rated satisfied
                  -
                  High to Low</CustomRadio>
              </div>
            </template>
          </SearchDropdown>
        </div>
      </div>
      <div id="jobs-content">
        <div class="results">
          <p class="results-bar__total"><span id="job-search-results">713</span>results</p>
          <div class="results-search">
            <div class="list-filter">
              <input type="text" class="form-control" placeholder="Search job and press enter..." value="" />
            </div>

            <div class="list-filter dropdown"  @click="toggle()">
              <a class="dropdown-toggle dropdown-sortby" href="#">
                Sort by <span class="dropdown-sortby__sep">/</span>
                <span class="dropdown-sortby__selection"> Most Recent </span>
              </a>
              <div class="dropdown-menu" :class="{show: dropdown}">
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
import DetailJobs from './DetailJobs.vue'
import Checkbox from '../common/Checkbox.vue';
import SearchDropdown from './SearchDropdown.vue';
import CustomRadio from '../common/CustomRadio.vue';
import InputRange from '../common/InputRange.vue';
export default {
  components: {
    DetailJobs,
    Checkbox,
    SearchDropdown,
    CustomRadio,
    InputRange
},
  data() {
    return {
      dropdown: false,
    }
  },
  methods: {
    toggle() {
      this.dropdown = !this.dropdown;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/style.scss';

#joblist {
  padding: 47px calc((100% - 1086px) / 2);
  font-family: $base-font-family;
  font-weight: $light;
  font-size: 16px;
  color: $white;
}

#checkbox label {
  padding-top: 4px;
}

.search {
  margin-bottom: 25px;

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
        padding: 8px 16px;
        color: $gray;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        &:hover {
          color: $accent;
          background-color: #d9f8dd;
        }

        a {
          font-family: $base-font-family;
          font-weight: $light;
          font-size: 16px;
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
          margin-top: 8px;

          a {
            color: black;
            padding: 12px 16px;
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
      padding: 5px;
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
        margin-top: 2px;

        &:first-child {
          margin-top: 0;
        }
      }

    }

    .layout-list--lg .layout-list__item {
      height: 6px;
      margin-top: 2px;
    }

    .layout-list--md .layout-list__item {
      height: 4px;
      margin-top: 1px;
    }

    .layout-list--sm .layout-list__item {
      margin-top: 1px;
    }

    .active {
      .layout-list__item {
        background: #000000;
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
  color: #000000;
  font-weight: $light;
  font-size: 14px;
}

.results {
  display: flex;
  justify-content: space-between;

  &-bar__total {
    display: flex;
    align-items: center;
    margin-right: 20px;

    span {
      margin-right: 5px;
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
        margin-top: 8px;
        top: 45px;
        min-width: 232px;
        left: 0;
        box-sizing: border-box;

        .dropdown-item {
            display: block;
            width: 100%;
            padding: 15px 19px;
            font-weight: 400;
            clear: both;
            text-align: inherit;
            white-space: nowrap;
            font-family: $base-font-family;
            font-size: 14px;
            font-weight: 300;
            color: #686d77 !important;
            text-decoration: none;
            border: none;
            
            &:hover,
            &:active {
                color: #22ab59 !important;
                font-weight: bold;
            }
        }
        .active {
            color: #22ab59 !important;
            font-weight: bold;
        } 
        
    &:hover .dropdown-menu {
        display: block;
    }  
    }
    .show{
      display: block !important;
    }
}
  }

  &-search {
    display: flex;

    .list-filter {
      padding: 10px 0 11px 12px;

      input {
        outline: none;
        padding: 10px 11px 12px;
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
        padding-left: 23px;

        a {
          text-decoration: none;
          color: $black;

          span {
            color: gray;
          }

          .dropdown-sortby__selection {
            color: #22ab63;
            font-weight: $bold;

            &::after {
              color: #a8b0bf;
              vertical-align: middle;
              margin-top: -2px;
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
          background-color: #f5f7fa;
        }
      }
    }
  }

}
</style>