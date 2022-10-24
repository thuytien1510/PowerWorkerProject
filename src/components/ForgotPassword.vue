<template>
  <div id="forgot">
    <div class="col">
      <router-link :to="{ name: 'login'}" class="btn-with-icon"
        ><font-awesome-icon icon="fa-solid fa-arrow-left" /><span>Back</span>
      </router-link>
    </div>
    <h2>Enter Your Email</h2>
    <form action=""  @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          v-model="email"
          required
          placeholder="Type your response here"
        />
        <span class="error" v-if="emailIsValid && submit">{{msg.email}}</span>
      </div>
      <div class="form-group">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>
<script>
import submitForm from "@/components/mixins/mixinValidate";
import axios from 'axios';

export default {
  mixins: [submitForm],
  methods: {
    async submitForm() {
      this.submit = true;
      try {
        const credentials = {
          email: this.email,
        };
        const response = await axios.post('/auth/forgot-password/', credentials);
        console.log(response)
      } catch (error) {
        this.emailIsValid;
        console.log(error)
      }
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/style.scss";

#forgot {
  width: 400px;
  margin: 0 auto;
  padding-top: 4.375rem;
  padding-bottom: 5rem;
  padding-right: 0.6875rem;
}

.col {
  a {
    color: $gray;
    position: absolute;
    left: calc((100% - 1086px) / 2);
  }

  span {
    margin-left: 0.625rem;
  }
}
.form {
  &-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 30px;

    label {
      display: block;
      margin: 0 0 0.625rem;
      color: $gray;
      font-weight: $semibold;

      .two & {
        color: $white;
      }
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
      color: $white;
      font-family: inherit;
      font-size: inherit;
      font-weight: $semibold;
      line-height: inherit;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
</style>
