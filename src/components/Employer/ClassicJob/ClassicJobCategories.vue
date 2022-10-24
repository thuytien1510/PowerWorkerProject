<template>
  <div class="post-job-row" id="classicJobCategory">
    <div class="post-job-steps">
      <div class="post-job-step">
        <div class="target-zone">
          <h3>Choose the job category</h3>
        </div>
        <div class="row-categories" id="categoryZone">
          <div class="col">
            <CategogyJob id="jobCategory1" value="">Sign Up</CategogyJob>
            <CategogyJob id="jobCategory2" value=""
              >SEO, Promote Content, Search, Engage
            </CategogyJob>
            <CategogyJob id="jobCategory3" value=""
              >Data Entry, Collection, Extraction
            </CategogyJob>
            <CategogyJob id="jobCategory4" value="">Telegram</CategogyJob>
            <CategogyJob id="jobCategory5" value="">Discord</CategogyJob>
            <CategogyJob id="jobCategory6" value="">TikTok</CategogyJob>
          </div>
          <div class="col">
            <CategogyJob id="jobCategory1" value=""
              >Facebook<br />
              Micro-Influencer
            </CategogyJob>
            <CategogyJob id="jobCategory2" value=""
              >Twitter<br />
              Micro-Influencer
            </CategogyJob>
            <CategogyJob id="jobCategory3" value=""
              >Instagram<br />
              Micro-Influencer
            </CategogyJob>
            <CategogyJob id="jobCategory10" value="">Promotion</CategogyJob>
            <CategogyJob id="jobCategory11" value="">Reddit</CategogyJob>
            <CategogyJob id="jobCategory12" value=""
              >Video Marketing</CategogyJob
            >
          </div>
          <div class="col">
            <CategogyJob id="jobCategory13" value="">Forums</CategogyJob>
            <CategogyJob id="jobCategory14" value=""
              >Comment on other blogs
            </CategogyJob>
            <CategogyJob id="jobCategory15" value="">Answers</CategogyJob>
            <CategogyJob id="jobCategory16" value=""
              >Surveys / Offers</CategogyJob
            >
            <CategogyJob id="jobCategory17" value=""
              >Write an honest review (Service, Product)</CategogyJob
            >
          </div>
          <div class="col">
            <CategogyJob id="jobCategory19" value=""
              >Mobile Application</CategogyJob
            >
            <CategogyJob id="jobCategory20" value=""
              >Computer Programs</CategogyJob
            >
            <CategogyJob id="jobCategory21" value="">Leads</CategogyJob>
            <CategogyJob id="jobCategory22" value=""
              >Website Owners</CategogyJob
            >
            <CategogyJob
              id="jobCategory23"
              value=""
              style="cursor: not-allowed"
            >
              Qualification</CategogyJob
            >
            <CategogyJob id="jobCategory24" value="">Other</CategogyJob>
          </div>
        </div>
      </div>
      <div class="post-job-step">
        <div class="target-zone">
          <h3>Choose the subcategory</h3>
        </div>
        <div class="subcategory" id="subcategory">
          <CategorySub name="subcategory" id="subcat1" forN="subcat1" value=""
            >Facebook Like</CategorySub
          >
          <CategorySub name="subcategory" id="subcat2" forN="subcat2" value=""
            >Facebook Like (50+ Friends)
          </CategorySub>
          <CategorySub name="subcategory" id="subcat3" forN="subcat3" value=""
            >Facebook Like (100+ Friends)
          </CategorySub>
          <CategorySub name="subcategory" id="subcat4" forN="subcat4" value=""
            >Facebook Like (300+ Friends)
          </CategorySub>
          <CategorySub name="subcategory" id="subcat5" forN="subcat5" value=""
            >Add comment to existing conversation</CategorySub
          >
          <CategorySub name="subcategory" id="subcat6" forN="subcat6" value=""
            >Add me as a Friend</CategorySub
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategogyJob from "./Category/CategogyJob.vue";
import CategorySub from "./Category/CategorySub.vue";
export default {
  components: {
    CategogyJob,
    CategorySub,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.post-job-step {
  margin-bottom: 2.5rem;

  .col {
    width: 100%;
  }

  .row-categories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
