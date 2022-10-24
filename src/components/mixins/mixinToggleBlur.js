export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activeChange() {
      this.isActive = !this.isActive;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
