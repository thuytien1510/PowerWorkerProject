<template>
    <div class="post-job-row" id="classicJobCategory">
        <div class="post-job-steps">
            <div class="post-job-step">
                <div class="target-zone">
                    <h3>Choose targeting zone</h3>
                </div>
                <div class="row-target">
                    <RegionTargetZone name="zone" id="targetingCountries1" for="targetingCountries1"
                        value="International"></RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries2" for="targetingCountries2" value="Asia">
                    </RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries3" for="targetingCountries3"
                        value="USA & Western"></RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries4" for="targetingCountries4" value="Africa">
                    </RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries5" for="targetingCountries5"
                        value="Europe West"></RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries6" for="targetingCountries6"
                        value="Muslim Countries"></RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries7" for="targetingCountries7"
                        value="Europe East"></RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries8" for="targetingCountries8"
                        value="Latin America"></RegionTargetZone>
                    <RegionTargetZone name="zone" id="targetingCountries9" for="targetingCountries9"
                        value="Arab Countries"></RegionTargetZone>
                </div>
            </div>
            <div class="post-job-step">
                <div class="target-zone">
                    <h3>Select ALL countries you want to EXCLUDE from the selected zone (optional)</h3>
                </div>
                <div class="countryZone">
                    <RegionCountryZone name="ex1" id="ex-int-1" for="ex-int-1" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-2" for="ex-int-2" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-3" for="ex-int-3" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-4" for="ex-int-4" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-5" for="ex-int-5" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-6" for="ex-int-6" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-7" for="ex-int-7" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-8" for="ex-int-8" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-9" for="ex-int-9" value="Albania" />
                    <RegionCountryZone name="ex1" id="ex-int-10" for="ex-int-10" value="Albania" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RegionTargetZone from './Region/RegionTargetZone.vue'
import RegionCountryZone from './Region/RegionCountryZone.vue'
export default {
    components: {
        RegionCountryZone,
        RegionTargetZone
    }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/style.scss';

.post-job-step {
    margin-bottom: 40px;
}

h3 {
    font-size: 16px;
    font-weight: 500;
    color: $color-title;
    margin-bottom: 24px
}

.row-target {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 8px;
    column-gap: 20px;
    padding-right: 20px;
}

.countryZone {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 8px;
    column-gap: 4px;
    padding-right: 20px;
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