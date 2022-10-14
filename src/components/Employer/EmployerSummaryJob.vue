<template>
    <div id="summary">
        <div class="post-job-summary">
        <img src="../../assets/img/post-job-summary@2x.png" alt="">
        <div class="post-job-summary__content">
            <div class="bar">
                <h3>SUMMARY</h3>
                <p><strong>Estimated Job costs:</strong> $<span>1.1850</span></p>
                <hr>
                <p><strong>Zone:</strong> <span>International</span></p>
                <p><strong>Excluded:</strong> <span></span></p>
                <hr>
                <p><strong>Category:</strong> <span>Instagram Micro-Influencer</span></p>
                <p><strong>Subcategory:</strong> <span>Follow</span></p>
                <hr>
                <p><strong>Level:</strong> <span>starter</span></p>
                <p><strong>Speed:</strong> <span>1000</span></p>
                <p><strong>Workers needed:</strong> <span>25</span></p>
                <p><strong>Notify followers:</strong> <span></span></p>
                <p><strong>Workers will earn:</strong> <span>0.020</span></p>
                <p><strong>Required screenshots:</strong> <span>0</span></p>
                <p><strong>Hold job time:</strong> <span>5</span></p>
                <p><strong>Pause after approval:</strong> <span>no</span></p>
                <hr>
                <p><strong>Time to rate:</strong> <span>7</span></p>
                <p><strong>Autorate task:</strong> <span>System verify and rate task 'Satisfied'</span></p>
                <hr>
                <p><strong>Job title:</strong> <span></span></p>
                <p><strong>Tasks to be completed:</strong> <br><span></span></p>
                <p><strong>Additional Notes:</strong> <span></span></p>
                <p><strong>Proofs required:</strong> <br><span></span></p>
            </div>
        </div>
        <div class="post-job-summary__footer">
            <a href="#">Clear All</a>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/css/style.scss';
#summary{
    padding-left: 20px;
    min-width: 205px;
}
.post-job-summary {
    box-shadow: 0 8px 20px 0 rgb(97 44 21 / 19%);
    height: fit-content;

    .bar {
        overflow-y: hidden;
        max-height: 362px;
        &:hover{
            overflow: auto;
        }
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    &__content {
        padding: 24px 33px;
        max-height: 413px;

        h3 {
            margin-bottom: 20px;
            font-weight: 500;
            color: $color-title;
            font-size: 18px;
        }

        p {
            margin-bottom: 10px;

            strong {
                font-weight: 500;
            }
        }

        hr {
            margin: 13px 0;
            background-color: #d3dae6;
            border: 0;
            border-top: 1px solid rgba(0, 0, 0, .1);
        }

    }

    &__footer {
        a {
            text-decoration: none;
            text-transform: uppercase;
            color: $accent;
            display: block;
            padding: 12px 20px;
            border-radius: 1px;
            text-align: center;
            background-color: $color-backgroud-header;
            border-color: $color-backgroud-header;
            cursor: pointer;
            font-weight: $bold;
        }
    }
}

</style>