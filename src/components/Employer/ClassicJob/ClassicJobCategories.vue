<template>
  <div class="post-job-row" id="classicJobCategory">
    <div class="post-job-steps">
      <div class="post-job-step">
        <div class="target-zone">
          <h3>Choose the job category</h3>
        </div>
        <div class="row-categories" id="categoryZone">
          <CategogyJob
            v-for="category in categories"
            :key="category.id"
            :forV="category.id"
          >
            <template slot="input">
              <input
                type="radio"
                name="cate"
                :id="category.id"
                class="custom-control-input"
                :value="category.name"
                @click="getSubcategory"
                v-model="modelcategory"
              />
            </template>
            {{ category.name }}
          </CategogyJob>
        </div>
      </div>
      <div class="post-job-step">
        <div class="target-zone">
          <h3>Choose the subcategory</h3>
        </div>
        <div class="subcategory" id="subcategory">
          <CategorySub
            name="subcategory"
            v-for="subcategory in subcategories.children"
            :key="subcategory.id"
            :forV="subcategory.id"
          >
            <template slot="input">
              <input
                type="radio"
                :id="subcategory.id"
                :name="subcategories.name"
                :value="subcategory.name"
                v-model="modelsubcategory"
                @click="$emit('subcategory', subcategory)"
              />
            </template>
            {{ subcategory.name }}
          </CategorySub>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CategogyJob from "./Category/CategogyJob.vue";
import CategorySub from "./Category/CategorySub.vue";
export default {
  data() {
    return {
      categories: "",
      subcategories: "",
      modelcategory: "",
      modelsubcategory: [],
    };
  },
  components: {
    CategogyJob,
    CategorySub,
  },
  mounted() {
    axios
      .get(`/api/categories`)
      .then((response) => {
        this.categories = response.data.data;
        console.log(response.data);
      })
      .catch((e) => {});
  },
  methods: {
    getSubcategory(e) {
      this.$emit("category", {value: e.target.value, id: e.target.id});
      const arr = this.categories;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == e.target.value) {
          this.subcategories = arr[i];
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.post-job-step {
  margin-bottom: 2.5rem;

  .row-categories {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;
    padding-right: 1.25rem;
  }

  .subcategory {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 8px;
    column-gap: 0.25rem;
    padding-right: 1.25rem;
  }
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  color: $color-title;
  margin-bottom: 1.5rem;
}

@media screen and (max-width: 767.98px) {
  .post-job-step {
    .row-categories,
    .subcategory {
      grid-template-columns: 1fr 1fr;
      padding-right: 0;
    }
  }
}

@media screen and (max-width: 575.98px) {
  .post-job-step {
    .row-categories,
    .subcategory {
      grid-template-columns: 1fr;
    }
  }
}
</style>
