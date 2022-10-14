<template>
  <div id="logIn">
    <div class="container">
      <h2>Login</h2>
      <form action="">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" required placeholder="Type your response here" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required placeholder="Type your response here" />
        </div>
        <div class="form-group">
          <Checkbox name="Remember" id="remember" for="remember">Remember Me</Checkbox>
          <router-link class="form-recovery" to="/forgotpassword">Forgot Password?</router-link>
        </div>
        <div class="form-group">
          <button type="submit">
            <router-link to="/joblist" @click="login">Log In</router-link>
          </button>
        </div>
        <div class="create-account">
          <span>New to SproutGigs? </span>
          <router-link to="/signup" class="create-account-link">Create an account</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Checkbox from './common/Checkbox.vue';
export default{
  components: {
    Checkbox
  },
  methods:{
      login(){
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/style.scss';

#logIn {
  max-width: 520px;
  margin: 0 auto;
  padding-top: 70px;
  font-family: $base-font-family;
  padding-bottom: 80px;
}

h2 {
  font-family: $base-font-family;
  font-weight: $bold;
  font-size: 27px;
  color: $color-title;
  margin: 0;
  padding-bottom: 30px;
}

.form {
  &-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 30px;
    align-items: center;

    label {
      display: block;
      margin: 0 0 10px;
      color: $gray;
      font-size: 14px;
      font-weight: $semibold;
      font-family: $base-font-family;
    }

    input {
      outline: none;
      display: block;
      background: $color-backgroud-header;
      width: 100%;
      border: 0;
      box-sizing: border-box;
      padding: 10px 11px 12px;
      color: $color-title;
      font-family: $base-font-family;
      font-size: 15px;
      font-weight: $regular;
      line-height: inherit;
      transition: 0.3s ease;

      &:focus {
        color: $dark-gray;
        border-bottom: 1px solid $accent;
      }
    }

    button {
      outline: none;
      background: $accent;
      width: 100%;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-family: inherit;
      font-size: inherit;
      font-weight: $semibold;
      line-height: inherit;
      text-transform: uppercase;
      cursor: pointer;

      a {
        color: $white;
        text-decoration: none;
      }
    }

    .form-remember {
      font-weight: $regular;
      letter-spacing: 0;
      font-size: 14px;
      color: rgb(27, 27, 27);
      line-height: 21px;
      text-decoration: none;
      transform: none;

      input[type="checkbox"] {
        display: inline-block;
        width: auto;
        margin: 0 10px 0 0;
      }

      &:last-child {
        margin: 0;
      }
    }

    .form-recovery {
      color: $accent;
      font-size: 14px;
      color: rgb(34, 171, 89);
      text-decoration: underline;
      transform: none;
      letter-spacing: 0;
    }
  }

  // Header
  &-header {
    margin: 0 0 40px;

    h1 {
      padding: 4px 0;
      color: $accent;
      font-size: 24px;
      font-weight: $bold;
      text-transform: uppercase;
    }
  }

  &-footer {
    font-weight: $bold;
    size: 14px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    transform: uppercase;
  }
}

form .form-group:nth-child(3) {
  height: fit-content;
}

form .form-group:nth-child(4) {
  margin-bottom: 16px;
}

.create-account {
  text-align: center;
  font-size: 14px;
}

.create-account-link {
  color: $accent;
  size: 14px;
  transform: none;
  letter-spacing: 0;
}

.rememberMe {
  display: flex;
  align-items: center;
}

#remember {
  width: fit-content;
}
</style>
