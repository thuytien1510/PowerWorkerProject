<template>
    <div class="custom-control" :class="{'custom-checkbox-btn--success': isActive}" @click="activeChange()">
        <input type="radio" :name="name" :id="id" class="custom-control-input" :value="value">
        <label :for="forN" class="custom-control-label">
            <slot></slot>
        </label>
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
        },
        close(e) {
            if (!this.$el.contains(e.target)) {
                this.isActive = false
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.close)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.close)
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.custom-control {
    position: relative;
    z-index: 1;
    display: block;
    min-height: 21px;
    margin-bottom: 8px;
    width: 100%;
    input {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 13px;
        height: 17px;
        opacity: 0;
        padding: 0;
    }

    label {
        display: block;
        padding: 14px 16px;
        text-align: center;
        border: 1px solid #d3dae6;
        color: #1b1b1b;
        white-space: normal;
        cursor: pointer;
    }
}
.custom-control-label{
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
}
</style>
