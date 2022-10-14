<template>
    <div>
        <div class='range-slider'>
            <div class="slider-number">
                <input type="number" min="0" max="3000" step="1" v-model="sliderMin" disabled>
                <span>-</span>
                <input type="number" min="0" max="3000" step="1" v-model="sliderMax" disabled>
            </div>
            <input type="range" min="0" max="3000" step="1" v-model="sliderMin">
            <input type="range" min="0" max="3000" step="1" v-model="sliderMax">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            minAngle: 1000,
            maxAngle: 2000
        }
    },
    computed: {
        sliderMin: {
            get: function () {
                var val = parseInt(this.minAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val > this.maxAngle) {
                    this.maxAngle = val;
                }
                this.minAngle = val;
            }
        },
        sliderMax: {
            get: function () {
                var val = parseInt(this.maxAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val < this.minAngle) {
                    this.minAngle = val;
                }
                this.maxAngle = val;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.range-slider {
    width: 300px;
    margin: auto;
    text-align: center;
    position: relative;
    height: 6em;
}

.range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 12px;
}

input[type=number] {
    border: 1px solid #ddd;
    text-align: center;
    font-size: 1.6em;
    -moz-appearance: textfield;
    width: calc(50% - 24px);
    height: 36px;
    font-size: 14px;
    font-weight: 500;
}

.slider-number{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
    border: 2px solid #ff6347;
}

input[type=range] {
    -webkit-appearance: none;
    width: 100%;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: $accent;
}

input[type=range]:focus::-ms-fill-lower {
    background: $accent;
}

input[type=range]:focus::-ms-fill-upper {
    background: $accent;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    background: $accent;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
    margin-bottom: 2px;
}

input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid $accent;
    height: 14px;
    width: 14px;
    border-radius: 25px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
    background: $white;
}
</style>