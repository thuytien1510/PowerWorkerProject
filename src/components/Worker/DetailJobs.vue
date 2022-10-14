<template>
  <div id="detailjob">
    <a href="" class="job-bar">
      <div class="job-bar__inner">
        <div class="job-bar__header">
          <h3 class="job-bar__heading">
            <span>Morpher: Sign Up + Auto KYC (New users Only)</span>
            <span>FEATURED</span>
          </h3>
          <div class="job-bar__actions">
            <button class="job-bar__quick-view">
              <i class="fas fa-external-link-alt"></i>
            </button>
            <button class="job-bar__quick-view">
              <i class="fas fa-eye-slash"></i>
            </button>
          </div>
        </div>
        <div class="job-bar__body">
          <div class="job-bar__info">
            <p>
              <span>
                <span>INT</span>
                <span>International</span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <img src="../../assets/img/level-1.svg" alt="Starter Level" draggable="false" />
                </span>
                <span class="text-starter">Starter</span>
              </span>
            </p>
          </div>
          <div class="job-bar__user">
            <div class="jobs__item-cell jobs__item-cell--success">
              <i class="fas fa-lock"></i>
            </div>
            <div class="jobs__item-cell jobs__item-cell--success">
              <i class="fas fa-lock"></i>
            </div>
          </div>
          <div class="job-bar__progress">
            <p class="mb-3">
              <strong class="fw-medium">29</strong> of
              <strong class="fw-medium">250</strong> done
            </p>
            <div class="progress progress-style-2">
              <div class="progress-bar" role="progressbar" style="width: 11%"></div>
            </div>
          </div>
          <div class="job-bar__rate">
            <div class="job-bar__price text-right">
              <small>$</small><span>0.500</span>
            </div>
            <p>1 day rate</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';

#detailjob {
  margin-bottom: 8px;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.job-bar .job-bar__inner {
  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 100%;
  background-color: #fbf9ff;
  padding: 20px 32px;
  border: 1px solid #f0f2f5;
  border-left: 2px solid #6a2af5;
  border-radius: 5px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
  }

  .job-bar__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    .job-bar__heading {
      padding-top: 4px;
      font-weight: 500;
      font-size: 15.4px;
      color: $color-title;

      span:nth-child(2) {
        margin-left: 12px;
        background-color: #6a2af5;
        color: $white;
        display: inline-block;
        vertical-align: middle;
        min-height: 16px;
        min-width: 16px;
        border-radius: 2px;
        line-height: 16px;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        padding: 0 3px;
      }
    }

    .job-bar__actions {
      button {
        border: none;
        background: transparent;
        font-size: 16px;
        color: #686f89;
      }
    }
  }

  .job-bar__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .job-bar__info {
      display: flex;
      align-items: center;
      gap: 20px;

      span {
        display: flex;
        align-items: center;
        color: gray;

        span {
          &:first-child {
            background-color: #d4edda;
            color: #155724;
            display: inline-block;
            vertical-align: middle;
            min-height: 16px;
            min-width: 16px;
            border-radius: 2px;
            line-height: 16px;
            text-align: center;
            font-size: 10px;
            font-weight: bold;
            padding: 0 3px;
            margin-right: 4px;
          }

          &:last-child {
            color: #686d77;
            font-weight: 500;
          }
        }
      }
    }

    .job-bar__user {
      flex-basis: 150px;
      div {
        color: #686d77;
        padding: 10px;
        display: flex;
        align-items: center;
      }
    }

    .job-bar__progress {
      color: #1b1b1b;
      flex-basis: 120px;

      p {
        margin-bottom: 16px;

        strong {
          font-weight: 500;
        }
      }

      .progress {
        background-color: #dadada;
        width: 80px;
        height: 4px;
        background: #f2f4f7;
        border-radius: 2px;

        .progress-bar {
          background-color: #17a2b8; //change
          width: 11.6%; //change
          border-radius: 2px;
          height: 100%;

        }
      }
    }

    .job-bar__rate {
      color: #1b1b1b;

      .job-bar__price {
        text-align: right;

        small {
          display: inline-block;
          font-size: 17px;
          font-weight: 400;
          padding-top: 4px;
          vertical-align: top;
        }

        span {
          padding-left: 1px;
          font-size: 24px;
          font-weight: $bold;
        }
      }

      p {
        color: #686d77;
        font-weight: 500;
        padding-top: 8px;
      }
    }
  }
}
</style>
