<template>
    <div id="radio">
        <input type="radio" :name="name" :id="id" />
        <label :for="id">
            <slot></slot>
        </label>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        id: String
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/style.scss';

#radio {
    position: relative;
    display: flex;
    align-items: center;

    label {
        font-family: $base-font-family;
        font-size: 14px;
        padding-top: 3px;
    }
}

[type="radio"]:not(:checked),
[type="radio"]:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
    border: 1px solid #aaa;
}

[type="radio"]:not(:checked)+label,
[type="radio"]:checked+label {
    position: relative;
    padding-left: 1.5em;
    font-size: 1.05em;
    cursor: pointer;
}

/* radio aspect */
[type="radio"]:not(:checked)+label:before,
[type="radio"]:checked+label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.3em;
    width: 12px;
    height: 12px;
    transition: all 0.275s;
    border: 1px solid #b9b5b573;
    border-radius: 50%;
}

[type="radio"]:checked+label:before {
    border: 1px solid $accent;
}

/* checked mark aspect */
[type="radio"]:not(:checked)+label:after,
[type="radio"]:checked+label:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.3em;
    width: 7px;
    height: 7px;
    transition: all 0.275s;
    vertical-align: middle;
    border-radius: 50%;
    border: 4px solid $accent;
}

[type="radio"]:checked:focus+label:before,
[type="radio"]:not(:checked):focus+label:before {
    box-shadow: 0 0px 3px 2px $accent;
}

[type="radio"]:not(:checked)+label:after {
    opacity: 0;
}

[type="radio"]:checked+label:after {
    opacity: 1;
}
</style>