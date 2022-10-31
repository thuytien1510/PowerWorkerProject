<template>
  <div class="post-job-row" id="classicJobCategory">
    <div class="post-job-steps">
      <div class="post-job-step">
        <div class="target-zone">
          <h3>Choose targeting zone</h3>
        </div>
        <div class="row-target">
          <RegionTargetZone
            v-for="location in locations"
            :key="location.id"
            :value="location.loca"
            :forV="'targetingCountries' + location.id"
          >
            <template slot="input">
              <input
                type="radio"
                name="zone"
                :id="'targetingCountries' + location.id"
                :value="location.loca"
                @click="getCountries"
                v-model="modelregion"
              />
            </template>
          </RegionTargetZone>
        </div>
      </div>
      <div class="post-job-step">
        <div class="target-zone">
          <h3>
            Select ALL countries you want to EXCLUDE from the selected zone
            (optional)
          </h3>
        </div>
        <div class="countryZone">
          <RegionCountryZone
            v-for="country in countries"
            :key="country.id"
            :forV="country.id"
            :value="country.name"
          >
          <template slot="input" >
            <input
                type="checkbox"
                :name="country.targetZone[0]"
                :id="country.id"
                :value="country.name"
                @click="$emit('country', country)"
                v-model="modelcountries"
              />
          </template>
        </RegionCountryZone>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RegionTargetZone from "./Region/RegionTargetZone.vue";
import RegionCountryZone from "./Region/RegionCountryZone.vue";
import axios from "axios";

export default {
  components: {
    RegionCountryZone,
    RegionTargetZone,
  },
  data() {
    return {
      locations: [
        {
          id: 1,
          loca: "Africa",
        },
        {
          id: 2,
          loca: "Arab Countries",
        },
        {
          id: 3,
          loca: "Asia",
        },
        {
          id: 4,
          loca: "Caribbean",
        },
        {
          id: 5,
          loca: "Europe West",
        },
        {
          id: 6,
          loca: "Europe East",
        },
        {
          id: 7,
          loca: "International",
        },
        {
          id: 8,
          loca: "Latin America",
        },
        {
          id: 9,
          loca: "Muslim Countries",
        },
        {
          id: 10,
          loca: "USA & Western",
        },
      ],
      countries: [],
      modelregion: '',
      modelcountries: []
    };
  },
  methods: {
    getCountries(event){
      axios
      .get(`/api/countries?target_zone=${event.target.value}`).then((response) => {
        this.countries = response.data.data;
      this.$emit('region', event.target.value);
      })
      .catch((e) => {});
    },
    

  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.post-job-step {
  margin-bottom: 2.5rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  color: $color-title;
  margin-bottom: 1.5rem;
}

.row-target {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: 1.25rem;
  padding-right: 1.25rem;
}

.countryZone {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 8px;
  column-gap: 0.25rem;
  padding-right: 1.25rem;
}

@media screen and (max-width: 767.98px) {
  .row-target {
    grid-template-columns: 1fr !important;
    padding-right: 0px;
  }

  .countryZone {
    grid-template-columns: 1fr;
    padding-right: 0px;
  }
}
</style>
