<template>
    <div class="search-bar">
        <IconButton
          class="icon-button"
          :icon="icon"
          :active="true"
          @click="handleSearch"
        />
        <input
          type="text"
          class="search-input"
          :placeholder="placeholder"
          v-model="searchQuery"
          @focus="handleInputFocus"
          @blur="handleInputBlur" 
        />
        
    </div>
</template>

<script>
    import IconButton from './IconButton.vue';

    export default {
        name: 'MobileInputBar',
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
    .icon-button {
        margin: 0 10px;
    }
    .search-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #EFEFEF;
        border-radius: 4px;
        padding: 10px;
        width: 100%;
    }
    .search-input {
        flex: 1;
        border: none;
        outline: none;
        padding: 20px;
        font-size: 20px;
        background-color: #efefef;
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