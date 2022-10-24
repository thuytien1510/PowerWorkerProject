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
  },
};
