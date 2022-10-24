<template>
  <div id="signUp">
    <div class="container">
      <form
        id="signup-form"
        class="signup-form"
        action=""
        @submit.prevent="submitForm"
      >
        <div class="login-form__content">
          <h2>Sign Up</h2>
          <div class="row-form">
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="fullname"
                  >Real name (for internal verific. only)</label
                >
                <input
                  type="text"
                  name="Fullname"
                  id="fullname"
                  class="form-control"
                  placeholder="Type your response here"
                  v-model="name"
                />
                <span class="error" v-if="nameIsValid && submit">{{
                  msg.name
                }}</span>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  class="form-control"
                  placeholder="Type your response here"
                  v-model="email"
                />
                <span class="error" v-if="emailIsValid && submit">{{
                  msg.email
                }}</span>
              </div>
            </div>
          </div>
          <div class="row-form">
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <input
                  type="password"
                  name="Password"
                  id="password"
                  class="form-control"
                  placeholder="Type your response here"
                  v-model.number="password"
                />
                <span class="error" v-if="passwordIsValid && submit">{{
                  msg.password
                }}</span>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="confirmpassword"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  name="Confirmpassword"
                  id="confirmpassword"
                  class="form-control"
                  placeholder="Type your response here"
                  v-model.number="confirmpassword"
                />
                <span class="error" v-if="confirmpasswordIsValid && submit">{{
                  msg.confirmpassword
                }}</span>
              </div>
            </div>
          </div>
          <div class="row-form">
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="nickname">Nickname</label>
                <input
                  type="text"
                  name="Nickname"
                  id="nickname"
                  class="form-control"
                  placeholder="Type your response here"
                  v-model="nickname"
                />
                <span class="error" v-if="nicknameIsValid && submit">{{
                  msg.nickname
                }}</span>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <span class="fancy-select">
                  <label class="form-label" for="countrycode"
                    >Select Country</label
                  >
                  <Select2
                    placeholder="Select Country"
                    v-model="myValue"
                    :options="myOptions"
                    @change="myChangeEvent($event)"
                    @select="mySelectEvent($event)"
                  />
                </span>
                <span class="error" v-if="!selectCountryValid && submit"
                  >Country not selected</span
                >
              </div>
            </div>
          </div>

          <div class="signup-profile-type">
            <div class="signup-profile-type__content">
              <h4>Select your profile type:</h4>
              <p>
                Select the desired profile type now, but you can switch between
                them later.
              </p>
            </div>

            <div class="signup-profile-type__options">
              <div class="radio-group-2">
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="Profiletype"
                      value="WORKER"
                      id="profileTypeWorker"
                      v-model="posistion"
                      checked
                    />
                    <label for="profileTypeWorker">I'm a Worker</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="Profiletype"
                      value="EMPLOYER"
                      id="profileTypeEmployer"
                      v-model="posistion"
                    />
                    <label for="profileTypeEmployer">I'm an Employer</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="custom-control" >
            <Checkbox forV="tos">
              <template slot="input">
                <input type="checkbox" name="Tos" id="tos" v-model="checkAccept"/>
              </template>
              I agree to SproutGigs Terms of Service and Privacy Policy.
            </Checkbox>
            <span class="error" v-if="!agreeValid && submit"
              >You need to accept the Terms of Service</span
            >
          </div>
          <div class="custom-control">
            <Checkbox forV="opt-in">
              <template slot="input">
                <input type="checkbox" name="OptIn" id="opt-in"/>
              </template>
              Send me news, events and offers via periodic email.
            </Checkbox>
          </div>
        </div>
        <div class="login-form__footer">
          <button type="submit">SIGN UP</button>
          <p class="have-account">
            Have an account?
            <router-link :to="{ name: 'login'}" class="login-link">Login now.</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import "vue-select/dist/vue-select.css";
import Select2 from "v-select2-component";
import Checkbox from "./common/Checkbox.vue";
import submitForm from "@/components/mixins/mixinValidate";
import axios from "axios";

export default {
  data() {
    return {
      posistion: "",
      checkAccept: "",
      myValue: "",
      myOptions: [
        "Select Country",
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
    };
  },
  mixins: [submitForm],
  computed: {
    selectCountryValid() {
      return this.myValue ? true : false;
    },
    agreeValid() {
      console.log(this.checkAccept);
      return this.checkAccept ? true : false;
    },
  },
  methods: {
    formIsValid() {
      return (
        this.emailIsValid &&
        this.passwordIsValid &&
        this.confirmpasswordIsValid &&
        this.nameIsValid &&
        this.nicknameIsValid &&
        this.selectCountryValid &&
        this.agreeValid
      );
    },
    async submitForm() {
      this.submit = true;
      try {
        const credentials = {
          fullName: this.name,
          username: this.nickname,
          email: this.email,
          region: this.myValue,
          password: this.password,
          role: this.posistion,
        };
        const response = await axios.post("/auth/register", credentials);
        console.log(response);

        if (this.formIsValid) {
          this.$router.push("/login");
        }
      } catch (error) {
        this.formIsValid();
        console.log(error);
      }
    },
  },
  components: { Select2, Checkbox },
};
</script>
<style>
.select2 {
  width: 100% !important;
}

.select2-dropdown,
.select2-dropdown--below {
  width: 200px !important;
}

.select2-selection--single .select2-selection__arrow b {
  visibility: hidden;
}

.select2-container--default
  .select2-selection--single
  .select2-selection__arrow::after {
  font-family: "Font Awesome 5 Free";
  content: "\f077";
  display: inline-block;
  font-weight: 900;
  font-size: 1.063rem;
  position: absolute;
  top: 10px;
  right: 0px;
  color: #686d77;
  width: 42px;
  text-align: center;
}

.select2-container--default.select2-container--open
  .select2-selection--single
  .select2-selection__arrow:after {
  font-family: "Font Awesome 6 Free";
  content: "\f078";
  display: inline-block;
  font-weight: 900;
  font-size: 1.063rem;
  top: 10px;
  right: 0px;
  color: #686d77;
  width: 42px;
  text-align: center;
}

.select2-results__option--highlighted {
  color: #22ab59 !important;
  background: #fff !important;
}

.select2-container--open .select2-selection--single {
  border-bottom: 1px solid #22ab59 !important;
}

.select2-results__option:first-child {
  color: #22ab59 !important;
}

.select2-results__option {
  padding: auto 0.3125rem;
}

.select2-results__options {
  font-family: "Roboto";
  padding-left: 0.625rem;
  font-size: 14px;
  font-weight: 500;
}

.select2-search__field {
  height: 35px;
}

.select2-selection,
.select2-selection--single {
  height: 40px !important;
  border: none !important;
}

.select2-selection {
  background: #f5f7fa !important;
  border-radius: 0px !important;
}

.select2-selection__rendered {
  padding-top: 0.438rem;
  font-size: 14px;
  font-weight: 500;
  color: rgb(104, 109, 119);
}

.select2-dropdown {
  border: none;
  box-shadow: 0 8px 20px 0 rgb(97 44 21 / 19%);
}

.select2-search--dropdown {
  padding: 0.625rem;
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

#signUp {
  max-width: 32.5rem;
  margin: 0 auto;
  padding-top: 4.375rem;
  font-family: $base_font_family;
  padding-bottom: 5rem;
}

.row-form {
  display: flex;
  gap: 1rem;

  .col {
    width: 100%;
  }

  .form-group {
    width: 100%;
    margin-bottom: 1.875rem;

    label {
      display: block;
      margin: 0 0 0.625rem;
      color: $gray;
      font-size: 0.875rem;
      font-weight: $semibold;
      font-family: $base_font_family;
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
      font-family: $base_font_family;
      font-size: 0.9375rem;
      font-weight: $regular;
      line-height: inherit;
      transition: 0.3s ease;

      &:focus {
        color: $dark-gray;
        border-bottom: 1px solid $accent;
      }
    }

    .fancy-select {
      div {
        background: $color-backgroud-header;
        width: 100%;
      }
    }
  }
}

.signup-profile-type {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.signup-profile-type__content {
  font-size: 14px;

  h4 {
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    font-weight: $light;
  }
}

.signup-profile-type__options {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 1rem;
  font-size: 14px;

  .radio-group-2 {
    margin: 0;
    padding: 0;

    li:first-child {
      margin-top: 0;
    }

    li {
      margin-top: 0.625rem;

      input {
        margin: -1px;
        padding: 0;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        clip: rect(0, 0, 0, 0);
        position: absolute;
      }

      label {
        position: relative;
        padding-left: 1.75rem;
        cursor: pointer;
        margin: 0;
      }

      input:checked + label:before {
        background-image: url(../assets/img/radio-checked.svg);
        background-color: $accent;
      }

      label:before {
        border: 1px solid $accent;
        width: 17px;
        height: 17px;
        border-radius: 20px;
        background-position: center center;
        background-repeat: no-repeat;
      }

      label:before,
      label:after {
        content: "";
        position: absolute;
        left: 0;
      }
    }
  }
}

.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  font-size: 14px;
  font-weight: $light;
  color: rgb(104, 109, 119);

  .custom-control-label {
    padding-top: 0.3125rem;
  }
}

.login-form__footer {
  margin-top: 1.5rem;

  button {
    outline: none;
    background: $accent;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 0.75rem 1.25rem;
    color: $white;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 1rem;
  }
}

.have-account {
  text-align: center;
  font-size: 14px;
}

.login-link {
  color: $accent;
  size: 14px;
  transform: none;
  letter-spacing: 0;
}

@media screen and (max-width: 767.98px) {
  .row-form {
    flex-wrap: wrap;
    gap: unset;
  }
}
</style>
