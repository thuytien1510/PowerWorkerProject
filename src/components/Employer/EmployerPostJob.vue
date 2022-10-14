<template>
    <div id="postjob">
        <div class="container">
            <h2>Post Job</h2>
            <div class="main">
                <ul class="nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" id="classic-job-tab" href="">Classic Job</a>
                        <i class="fas fa-info-circle"></i>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="list-job-tab" href="">List Job</a>
                        <i class="fas fa-info-circle"></i>
                    </li>
                </ul>
                <div class="content-classic-job">
                    <div class="content-left">
                        <router-view></router-view>
                        <router-link tag="button" class="btn-next" to="/employer/postJob/category">
                            Apply and go to next
                        </router-link>
                    </div>
                    <EmployerSummaryJob />
                </div>
            </div>
            <div class="steps-bar" id="postJobStepsBar">
                <div class="steps-bar__inner">
                    <router-link to="/employer/postJob/region" class="steps-bar__nav"
                        :class="{'steps-bar__nav--disabled': !isNext}"><i class="fa-solid fa-chevron-left"></i><span
                            @click="next()">Back</span></router-link>
                    <ul class="steps-bar__ul">
                        <li class="steps-bar__step steps-bar__step--focus"
                            :class="{'steps-bar__step--complete': isNext}">
                            <div class="steps-bar__step-icon">
                                <span>Region</span>
                            </div>
                        </li>

                        <li class="steps-bar__step" :class="{'steps-bar__step--focus': isNext}">
                            <div class="steps-bar__step-icon">
                                <span>Category</span>
                            </div>
                        </li>

                        <li class="steps-bar__step">
                            <div class="steps-bar__step-icon">
                                <span>Proofs</span>
                            </div>
                        </li>

                        <li class="steps-bar__step">
                            <div class="steps-bar__step-icon">
                                <span>Settings</span>
                            </div>
                        </li>

                        <li class="steps-bar__step">
                            <div class="steps-bar__step-icon">
                                <span>Promotion</span>
                            </div>
                        </li>
                    </ul>
                    <router-link to="/employer/postJob/category" class="steps-bar__nav"><span
                            @click="next()">Next</span> <i class="fa-solid fa-chevron-right"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EmployerSummaryJob from './EmployerSummaryJob.vue';
export default {
    components: {
        EmployerSummaryJob,
    },
    data() {
        return {
            isNext: false
        }
    },
    methods: {
        next() {
            this.isNext = !this.isNext
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/style.scss';

#postjob {
    padding: 48px calc((100% - 1086px) / 2);
    font-family: $base-font-family;
    font-weight: $light;
    font-size: 14px;
}

h2 {
    color: $color-title;
    font-weight: $bold;
    font-size: 27px;
    margin-bottom: 32px;
}

.main {
    ul {
        border-bottom: 2px solid #d3dae6;
        margin-bottom: 24px !important;
        list-style: none;
        padding-left: 0;
        display: flex;
        margin-top: 0;

        li {
            margin-right: 42px;
            margin-bottom: -2px;

            a {
                margin-right: 11px;
                padding: 0 0 19px;
                border-radius: 0;
                border: 0;
                text-transform: uppercase;
                display: inline-block;
                font-weight: 500;
                border-bottom: 2px solid #d3dae6;
                text-decoration: none;
                color: $color-title;

                &:hover {
                    border-color: $accent;
                }
            }

            .active {
                border-color: $accent;
            }
        }
    }

    .content-classic-job {
        display: grid;
        grid-template-columns: 8fr 4fr;
        width: 100%;
        padding-bottom: 32px;

        .content-left {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .btn-next {
                display: block;
                cursor: pointer;
                text-transform: uppercase;
                padding: 12px 20px;
                font-size: 14px;
                border-radius: 1px;
                color: $white;
                background-color: $accent;
                font-weight: bold;
                border: none;
                width: fit-content;
                align-self: center;
            }
        }
    }

}

.steps-bar {
    background: $color-backgroud-header;
    padding: 35px 20px;
    margin-bottom: 50px;

    .steps-bar__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        a {
            text-decoration: none;
            cursor: pointer;
            font-weight: 400;
            display: inline-block;
            line-height: 33px;
            color: #1b1b1b;
            font-size: 16px;

            span {
                padding: 0 8px;
            }
        }

        .steps-bar__nav--disabled {
            opacity: 0.4;
            pointer-events: visible;
        }

        .steps-bar__ul {
            list-style: none;
            flex-grow: 1;
            display: flex;
            margin: 0;
            padding: 0 10px;
            justify-content: center;
            align-items: center;

            .steps-bar__step {
                flex-grow: 1;
                position: relative;
                height: 14px;
                width: 14px;
                min-width: 14px;
                margin-top: -15px;

                &:last-child {
                    flex-grow: 0;
                }

                &::after {
                    content: "";
                    background-color: #d3dae6;
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                }

                .steps-bar__step-icon {
                    content: "";
                    height: 14px;
                    width: 14px;
                    border: 1px solid #d3dae6;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    background-color: $color-backgroud-header;
                    overflow: visible;
                    border-radius: 50%;

                    span {
                        position: absolute;
                        top: 100%;
                        margin-top: 5px;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 12px;
                        color: #d3dae6;
                    }
                }
            }

            .steps-bar__step--focus {

                .steps-bar__step-icon,
                .steps-bar__step--complete .steps-bar__step-icon {
                    border-color: $accent;
                    height: 28px;
                    width: 28px;
                    margin-top: -7px;
                    margin-left: -7px;
                    z-index: 2;

                    span {
                        color: $accent;
                    }
                }
            }

            .steps-bar__step--complete {
                .steps-bar__step-icon {
                    background: url(../../assets/img/sprite.svg) no-repeat;
                    background-color: $accent;
                    background-position: 47.619047619% 0;
                }

                &::after {
                    background-color: $accent;
                }
            }
        }
    }
}

@media screen and (max-width: 767.98px) {
    .main {
        .content-classic-job {
            grid-template-columns: 1fr;

            .content-left {
                padding-bottom: 32px;
            }
        }
    }
}
@media screen and (max-width: 499.98px) {
    .steps-bar .steps-bar__inner .steps-bar__ul .steps-bar__step .steps-bar__step-icon span{
        display: none;
    }
}
</style>