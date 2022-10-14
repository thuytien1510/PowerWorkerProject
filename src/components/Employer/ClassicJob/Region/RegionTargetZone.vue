<template>
    <div class="target-item " :class="{'custom-checkbox-btn--success': isActive}" @click="activeChange()">
        <input type="radio" :name="name" :id="id">
        <label :for="forN">
            {{value}}
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
.target-item {
    position: relative;
    z-index: 1;
    display: block;
    min-height: 21px;

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
        padding: 14px 20px;
        text-align: center;
        border: 1px solid #d3dae6;
        color: #1b1b1b;
        cursor: pointer;
    }
}
</style>
