<template>
  <div id="logIn">
    <div class="notice" v-if="notice">
      <p>Invalid email/password credentials.</p>
      <a href="#" @click="close" class="close-notice">X</a>
    </div>
    <div class="container">
      <h2>Login</h2>
      <form action="" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model="email"
            placeholder="Type your response here"
          />
          <span class="error" v-if="emailIsValid && submit">{{
            msg.email
          }}</span>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model.number="password"
            placeholder="Type your response here"
          />
          <span class="error" v-if="passwordIsValid && submit">{{
            msg.password
          }}</span>
        </div>
        <div class="form-group">
          <Checkbox forV="remember" @click="lsRememberMe()"
            ><template slot="input">
              <input type="checkbox" name="Remember" id="remember" />
            </template>
            Remember Me</Checkbox
          >
          <router-link class="form-recovery" :to="{ name: 'forgotpassword' }"
            >Forgot Password?</router-link
          >
        </div>
        <div class="form-group">
          <button type="submit">
            <a>Log In</a>
          </button>
        </div>
        <div class="create-account">
          <span>New to SproutGigs? </span>
          <router-link :to="{ name: 'signup' }" class="create-account-link"
            >Create an account</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Checkbox from "./common/Checkbox.vue";
import submitForm from "@/components/mixins/mixinValidate";
import axios from "axios";

export default {
  data() {
    return {
      notice: false,
    };
  },
  mixins: [submitForm],
  components: {
    Checkbox,
  },
  methods: {
    close() {
      this.notice = false;
    },
    formIsValid() {
      return this.emailIsValid && this.passwordIsValid;
    },
    async submitForm() {
      this.submit = true;
      try {
        const credentials = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post("/auth/login/", credentials);
        console.log(response);
        const token = response.data.data.token;
        const user = response.data.data.user;
        if (response.data.status == 200) {
          this.$store.dispatch("login", { token, user });
          this.$router.push({name: 'joblist'});
        }
      } catch (error) {
        if(error.response.status == 401 && this.msg["email"] == '' && this.msg["password"] == ''){
          this.notice = true;
        }
      }
    },
  },
  mounted() {
      if(this.$store.getters.isLoggedIn){
        this.$router.push({name: 'joblist'});
      }
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

#logIn {
  max-width: 32.5rem;
  margin: 0 auto;
  padding-top: 4.375rem;
  padding-bottom: 5rem;
  position: relative;
}

.form {
  &-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 1.875rem;
    align-items: center;

    label {
      display: block;
      margin: 0 0 0.625rem;
      color: $gray;
      font-weight: $semibold;
    }

    input {
      outline: none;
      display: block;
      background: $color-backgroud-header;
      width: 100%;
      border: 0;
      box-sizing: border-box;
      padding: 0.625rem 0.6875rem 0.75rem;
      color: $color-title;
      font-size: 0.9375rem;
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
      border-radius: 0.25rem;
      padding: 0.75rem 1.25rem;
      font-family: inherit;
      font-size: inherit;
      font-weight: $semibold;
      line-height: inherit;
      text-transform: uppercase;
      cursor: pointer;

      &:disabled {
        background: $gray;
      }

      a {
        color: $white;
        text-decoration: none;
      }
    }

    .form-remember {
      letter-spacing: 0;
      color: rgb(27, 27, 27);
      line-height: 21px;
      text-decoration: none;
      transform: none;

      input[type="checkbox"] {
        display: inline-block;
        width: auto;
        margin: 0 0.625rem 0 0;
      }

      &:last-child {
        margin: 0;
      }
    }

    .form-recovery {
      color: $accent;
      color: rgb(34, 171, 89);
      text-decoration: underline;
      transform: none;
      letter-spacing: 0;
    }
  }

  // Header
  &-header {
    margin: 0 0 2.5rem;

    h1 {
      padding: 0.25rem 0;
      color: $accent;
      font-size: 1.5rem;
      font-weight: $bold;
      text-transform: uppercase;
    }
  }

  &-footer {
    font-weight: $bold;
    color: $white;
    transform: uppercase;
  }
}

form .form-group:nth-child(3) {
  height: fit-content;
}

form .form-group:nth-child(4) {
  margin-bottom: 1rem;
}

.create-account {
  text-align: center;
}

.create-account-link {
  color: $accent;
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
