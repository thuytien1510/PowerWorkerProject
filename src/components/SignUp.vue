<template>
  <div id="signUp">
    <div class="container">
      <form id="signup-form" class="signup-form" action="">
        <div class="login-form__content">
          <h2>Sign Up</h2>
          <div class="row-form">
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="fullname">Real name (for internal verific. only)</label>
                <input type="text" name="Fullname" id="fullname" class="form-control" value=""
                  placeholder="Type your response here" required />
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input type="email" name="Email" id="email" class="form-control" value=""
                  placeholder="Type your response here" required />
              </div>
            </div>
          </div>
          <div class="row-form">
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <input type="password" name="Password" id="password" class="form-control"
                  placeholder="Type your response here" required />
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="confirmpassword">Confirm Password</label>
                <input type="password" name="Confirmpassword" id="confirmpassword" class="form-control"
                  placeholder="Type your response here" required />
              </div>
            </div>
          </div>
          <div class="row-form">
            <div class="col">
              <div class="form-group">
                <label class="form-label" for="nickname">Nickname</label>
                <input type="text" name="Nickname" id="nickname" class="form-control" value=""
                  placeholder="Type your response here" required />
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <span class="fancy-select">
                  <label class="form-label" for="countrycode">Select Country</label>
                  <Select2 placeholder="Select Country" v-model="myValue" :options="myOptions"
                    :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)"
                    @select="mySelectEvent($event)" />
                </span>
              </div>
            </div>
          </div>

          <div class="signup-profile-type">
            <div class="signup-profile-type__content">
              <h4>Select your profile type:</h4>
              <p>
                Select the desired profile type now, but you can switch between them later.
              </p>
            </div>

            <div class="signup-profile-type__options">
              <div class="radio-group-2">
                <li>
                  <input type="radio" name="Profiletype" value="worker" id="profileTypeWorker" required checked />
                  <label for="profileTypeWorker">I'm a Worker</label>
                </li>
                <li>
                  <input type="radio" name="Profiletype" value="employer" id="profileTypeEmployer" required />
                  <label for="profileTypeEmployer">I'm an Employer</label>
                </li>
              </div>
            </div>
          </div>

          <div class="custom-control">
            <Checkbox name="Tos" id="tos" for="tos">I agree to SproutGigs Terms of Service and Privacy Policy.
            </Checkbox>
          </div>
          <div class="custom-control">
            <Checkbox name="OptIn" id="opt-in" for="opt-in">Send me news, events and offers via periodic email.
            </Checkbox>
          </div>
        </div>
        <div class="login-form__footer">
          <button type="button">SIGN UP</button>
          <p class="have-account">
            Have an account? <router-link to="/login" class="login-link">Login now.</router-link>
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

export default {
  data() {
    return {
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
  methods: {
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text });
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

.select2-container--default .select2-selection--single .select2-selection__arrow::after {
  font-family: "Font Awesome 5 Free";
  content: "\f077";
  display: inline-block;
  font-weight: 900;
  font-size: 17px;
  position: absolute;
  top: 10px;
  right: 0px;
  color: #686d77;
  width: 42px;
  text-align: center;
}

.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow:after {
  font-family: "Font Awesome 5 Free";
  content: "\f078";
  display: inline-block;
  font-weight: 900;
  font-size: 17px;
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
  padding: auto 5px;
}

.select2-results__options {
  font-family: 'Roboto';
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
}

.select2-search__field {
  height: 35px;
}

.select2-selection,
.select2-selection--single {
  /* width: 200px !important; */
  height: 40px !important;
  border: none !important;
}

.select2-selection {
  background: #f5f7fa !important;
  border-radius: 0px !important;
}

.select2-selection__rendered {
  padding-top: 7px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(104, 109, 119);
}

.select2-dropdown {
  border: none;
  box-shadow: 0 8px 20px 0 rgb(97 44 21 / 19%);
}

.select2-search--dropdown {
  padding: 10px;
}
</style>
<style lang="scss" scoped>
// @import '../assets/css/style.scss';
@import '@/assets/css/style.scss';

#signUp {
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

.row-form {
  display: flex;
  gap: 16px;

  .col {
    width: 100%;
  }

  .form-group {
    width: 100%;
    margin-bottom: 30px;

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
      background: #f5f7fa;
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

    .fancy-select {
      div {
        background: #f5f7fa;
        width: 100%;
      }
    }
  }
}

.signup-profile-type {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.signup-profile-type__content {
  font-size: 14px;

  h4 {
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    font-weight: $light
  }
}

.signup-profile-type__options {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 16px;
  font-size: 14px;

  .radio-group-2 {
    list-style: none;
    margin: 0;
    padding: 0;

    li:first-child {
      margin-top: 0;
    }

    li {
      margin-top: 10px;

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
        padding-left: 28px;
        cursor: pointer;
        margin: 0;
      }

      input:checked+label:before {
        background-image: url(../assets/img/radio-checked.svg);
        background-color: #22ab59;
      }

      label:before {
        border: 1px solid #22ab59;
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
    padding-top: 5px;
  }
}

.login-form__footer {
  margin-top: 24px;

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
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 16px;
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
  .row-form{
    flex-wrap: wrap;
    gap: unset;
  }
}
</style>
