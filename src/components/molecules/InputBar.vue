<template>
    <div class="search-bar">
        <input
          type="text"
          class="search-input"
          :placeholder="placeholder"
          v-model="searchQuery"
          @focus="handleInputFocus"
          @blur="handleInputBlur" 
        />
        <IconButton
          class="icon-button"
          :icon="icon"
          :active="true"
          @click="handleSearch"
        />
    </div>
</template>

<script>
    import IconButton from './IconButton.vue';

    export default {
        name: 'InputBar',
        components: {
            IconButton,
        },
        methods: {
            handleInputFocus() {
                this.isFocused = true;
            },
            handleInputBlur() {
                if (this.searchQuery === '') {
                    this.isFocused = false;
                }
            },
            handleSearch() {
                console.log('search for: ', this.searchQuery);
            }
        },
        props: {
            icon: {
                type: [String, Object],
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
                default: 'Input here...'
            },
            
        },

        data() {
            return {
                searchQuery: '',
                isFocused: false,
            };
        },
    }
</script>

<style scoped>
    .search-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 4px;
        width: 261px;
    }
    .search-input {
        flex: 1;
        border: none;
        outline: none;
        padding: 4px;
        font-size: 14px;
    }
    .search-button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .search-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
    }
</style>