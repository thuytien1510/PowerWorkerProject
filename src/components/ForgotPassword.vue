<template>
  <div id="forgot">
    <div class="col">
      <router-link to="/login" class="btn-with-icon"><i class="fa-solid fa-arrow-left"></i><span>Back</span>
      </router-link>
    </div>
    <h2>Enter Your Email</h2>
    <form action="">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required placeholder="Type your response here" />
      </div>
      <div class="form-group">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/css/style.scss';

#forgot {
  width: 400px;
  margin: 0 auto;
  padding-top: 70px;
  font-family: $base-font-family;
  padding-bottom: 80px;
  padding-right: 11px;
}

.col {
  a {
    text-decoration: none;
    color: $gray;
    position: absolute;
    left: calc((100% - 1086px) / 2);


  }

  span {
    margin-left: 10px;
  }
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

    label {
      display: block;
      margin: 0 0 10px;
      color: $gray;
      font-size: 14px;
      font-weight: $semibold;
      font-family: $base-font-family;

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

      .two & {
        color: $white;

        &:focus {
          color: $white;
        }
      }
    }

    button {
      outline: none;
      background: $accent;
      width: 100%;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
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
