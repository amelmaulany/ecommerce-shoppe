<template>
    <div class="dropdown">
        <div class="selected-option" @click="toggleDropdown">
            {{ selectedOption }}
            <IconButton
                class="dropdown-button"
                :icon="ArrowDownIcon"
                :active="true"
                @click="toggleDropdown"
            />
        </div>
        <ul v-if="isOpen" class="options">
            <li
              v-for="option in options"
              :key="option"
              @click="selectOption(option)"
            >
                {{ option }}
            </li>
        </ul>
    </div>    
</template>

<script>
    import IconButton from '../molecules/IconButton.vue';
    import ArrowDownIcon from '../atoms/ArrowDownIcon.vue';

    export default {
        name: 'DropDown',
        components: {
            IconButton,
        },
        props: {
            options: {
                type: Array,
                required: true,
            },
            selectedOption: {
                type: String,
                default: ''
            },
            isOpen: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            internalIsOpen: {
                get() {
                    return this.isOpen;
                },
                set(value) {
                    this.$emit('update:isOpen', value);
                }
            },
        },
        data() {
            return {
                // isOpen: false,
                ArrowDownIcon,
            };
        },
        methods: {
            toggleDropdown() {
                this.internalIsOpen = !this.internalIsOpen;
            },
            selectOption(option) {
                this.$emit('update:selectedOption', option);
                this.internalIsOpen = false;
            },
        },
        }
</script>

<style scoped>
    .dropdown {
        position: relative;
    }
    .selected-option {
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        width: 261px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
    }
    .options {
        position: absolute;
        top: 100%;
        left: 0;
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-top: 10px;
        z-index: 99;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 4px;
        width: 261px;
    }
    .options li {
        padding: 8px;
        cursor: pointer;
    }
    .options li:hover {
        background-color: #f2f2f2;
    }
    .dropdown-button {
        background-color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>
