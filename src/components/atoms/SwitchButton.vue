<template>
    <div>
        <label class="switch">
        <input type="checkbox" v-model="isChecked" @change="toggleSwitch" />
        <span class="slider"></span>
        </label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isChecked: false,
            };
        },
        methods: {
            toggleSwitch() {
                this.$emit('update:isChecked', !this.isChecked);
            },
        }
    }
</script>

<style scoped>
    .switch {
        position: relative;
        display: inline-block;
        width: 33px;
        height: 20px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: #707070;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(13px);
        -ms-transform: translateX(13px);
        transform: translateX(13px);
    }
</style>

