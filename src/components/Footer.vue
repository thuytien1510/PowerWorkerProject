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
          <a href=""><font-awesome-icon icon="fa-solid fa-envelope" /></a>
          <a href="https://www.facebook.com/groups/sproutgigs/" target="_blank"><font-awesome-icon icon="fa-brands fa-square-facebook" /></a>
          <a href="https://twitter.com/sproutgigs" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          <a href="https://www.reddit.com/r/SproutGigs" target="_blank"><font-awesome-icon icon="fa-brands fa-square-reddit" /></a>
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
  margin-top: auto;
  padding: 80px calc((100% - 1086px) / 2 + 1.25rem);
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3.125rem;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-content: center;
  flex-wrap: wrap;

  .nav-item {
    margin: 0.438rem 1.25rem;

    .nav-link {
      font-weight: $light;
      color: rgb(32, 50, 89);

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
    font-size: 0.9375rem;
    display: inline-block;
    vertical-align: middle;
    color: $color-title;
    opacity: 0.4;
    margin-left: 0.875rem;
    padding: 0.375rem 0.625rem;

    &:hover {
      color: $accent;
      opacity: 1;
    }
  }
}

.text-footer {
  margin-top: 1rem;
  font-size: 0.75rem;
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
      margin-bottom: 1.25rem;
    }
  }

  .text-footer {
    width: 100%;
    font-size: 0.725rem;
  }
}

@media screen and (max-width: 567px) {
  .footer-top .footer-nav {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.188rem;
  }
}
</style>
