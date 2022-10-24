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
            name="zone"
            :id="'targetingCountries' + location.id"
            :value="location.loca"
          ></RegionTargetZone>
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
            name="ex1"
            id="ex-int-1"
            forN="ex-int-1"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-2"
            forN="ex-int-2"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-3"
            forN="ex-int-3"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-4"
            forN="ex-int-4"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-5"
            forN="ex-int-5"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-6"
            forN="ex-int-6"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-7"
            forN="ex-int-7"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-8"
            forN="ex-int-8"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-9"
            forN="ex-int-9"
            value="Albania"
          />
          <RegionCountryZone
            name="ex1"
            id="ex-int-10"
            forN="ex-int-10"
            value="Albania"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RegionTargetZone from "./Region/RegionTargetZone.vue";
import RegionCountryZone from "./Region/RegionCountryZone.vue";
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
    };
  },
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
