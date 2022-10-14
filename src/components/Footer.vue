<template>
  <div id="footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <a href="/">
            <img src="../assets/img/home/logo-sg.svg" alt="SpountGigs" />
          </a>
        </div>
        <div>
          <ul class="footer-nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Wall of Fame</span>
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
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Terms of Use</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Privacy Policy</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom ">
        <p>&copy; 2022 SproutGigs.com. All Rights Reserved.</p>
        <div class="social">
          <a href=""><i class="fas fa-envelope"></i></a>
          <a href="https://www.facebook.com/groups/sproutgigs/" target="_blank"><i
              class="fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/sproutgigs" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.reddit.com/r/SproutGigs" target="_blank"><i class="fab fa-reddit-square"></i></a>
        </div>
      </div>
      <div class="text-footer">
        47 U.S. Code § 230 Disclaimer: SproutGigs shall not be treated as the publisher or speaker of any
        information provided by job publishers.
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/css/style.scss';

#footer {
  margin: 0;
  background-color: $color-backgroud-header;
  color: #7f7e7e;
  font-family: $base-font-family;
  font-weight: $light;
  font-size: 14px;
  margin-top: auto;
  padding: 80px calc((100% - 1086px) / 2 + 20px);
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-content: center;
  flex-wrap: wrap;

  .nav-item {
    list-style-type: none;
    align-items: center;
    margin: 7px 20px;

    .nav-link {
      text-decoration: none;
      font-weight: $light;
      font-size: 14px;
      color: rgb(32, 50, 89);
      font-family: $base-font-family;

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

.footer-bottom {
  display: flex;
  justify-content: space-between;

  .social a {
    font-size: 15px;
    display: inline-block;
    vertical-align: middle;
    color: $color-title;
    opacity: 0.4;
    margin-left: 14px;
    padding: 6px 10px;

    &:hover {
      color: $accent;
      opacity: 1;
    }
  }
}

.text-footer {
  margin-top: 16px;
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  #footer {
    text-align: center;
  }

  .footer-top,
  .footer-bottom {
    display: block;

    div:first-child,
    p {
      margin-bottom: 20px;
    }
  }

  .text-footer {
    width: 100%;
    font-size: 11.6px;
  }
}

@media screen and (max-width: 567px) {
  .footer-top .footer-nav {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    margin-top: 35px;
  }
}
</style>
