<template>
    <div class="subcategory-item" :class="{'custom-checkbox-btn--success': isActive}" @click="activeChange()">
        <input type="radio" :id="id" name="subcategory" class="custom-control-input" :value="value">
        <label :for="forN" class="custom-control-label">
            <slot></slot>
        </label>
    </div>
</template>
<script>
export default {
    props: {
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
@import '@/assets/css/style.scss';

.subcategory-item {
    background-color: #f2f3f5;

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
        border: none;
    }
}
</style>
