<template>
    <div class="country-item" :class="{'custom-checkbox-btn--success': isActive}" @click="activeChange()">
        <input type="checkbox" :name="name" :id="id" :value="value">
        <label :for="forN" class="nameCountry">{{value}}</label>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        id: String,
        forN: String,
        value: String
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        activeChange() {
            this.isActive = !this.isActive
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../../assets/css/style.scss';

.country-item {
    input {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 13px;
        height: 17px;
        opacity: 0;
    }

    label {
        padding: 10px 16px;
        display: block;
        text-align: center;
        border: 1px solid #d3dae6;
        color: #1b1b1b;
        cursor: pointer;
        background-color: #f2f3f5;
        border: none;
    }
}

.custom-checkbox-btn--success {
    label {
        background-color: #ee542f !important;
        color: $white !important;
        border-color: rgba(0, 0, 0, 0);
        box-shadow: 0 2px 6px rgb(77 35 16 / 15%);
    }
}
</style>