export default {
  data() {
    return {
      email: null,
      password: null,
      confirmpassword: null,
      name: null,
      nickname: null,
      msg: [],
      submit: false,
    };
  },
  computed: {
    emailIsValid() {
      if (
        this.email &&
        this.checkMinMax(this.email.length, 6, 64) &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
      ) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] =
          "Email must be at least 6 characters and at most 64 characters";
      }
      return this.msg["email"];
    },
    passwordIsValid() {
      if (
        this.password &&
        this.checkMinMax(this.password.length, 8, 64) &&
        /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$/.test(
          this.password
        ) 
      ) {
        this.msg["password"] = "";
      } else {
        this.msg["password"] =
          "Password must be at least 8 characters and at most 64 characters and contain 1 uppercase, 1 lowercase and 1 number";
      }
      return this.msg["password"];
    },
    confirmpasswordIsValid() {
      if (
        this.confirmpassword &&
        this.checkMinMax(this.confirmpassword.length, 8, 64) &&
        /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$/.test(
          this.confirmpassword
        )
      ) {
        this.msg["confirmpassword"] = "";
      } else {
        this.msg["confirmpassword"] =
          "Password must be at least 8 characters and at most 64 characters and contain 1 uppercase, 1 lowercase and 1 number";
      }
      return this.msg["confirmpassword"];
    },
    nameIsValid() {
      if (
        this.name &&
        /^[A-Za-z0-9\s]*$/.test(this.name)
      ) {
        this.msg["name"] = "";
      } else {
        this.msg["name"] = "Name contains only letters, number and space ";
      }
      return this.msg["name"];
    },
    nicknameIsValid() {
      if (
        this.nickname &&
        /^[A-Za-z0-9_]*$/.test(this.nickname)
      ) {
        this.msg["nickname"] = "";
      } else {
        this.msg["nickname"] =
          "Nickname contains only letters, number and underscore ";
      }
      return this.msg["nickname"];
    }
  },
  methods: {
    checkMinMax(length, min, max) {
      return length > min && length < max ? true : false;
    }
  },
};
