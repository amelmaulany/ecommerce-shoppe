<template>
    <div class="photo-slider">
        <div class="mini-photos">
            <div
                v-for="photo of photos"
                :key="photo.id"
                class="mini-photo"
                @click="updateCurrentPhoto(photo)"
                :class="{'active': currentPhoto && photo.id === currentPhoto.id}"
            >
                <img :src="photo.url" alt="mini photo" />
            </div>
        </div>
        <div class="current-photo">
            <img :src="currentPhoto ? currentPhoto.url : photos[0].url" alt="current photo" class="displayed-photo" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PhotoSlider',
        props: {
            photos: {
                type: Array,
                required: true,
                default: () => [],
                validator: (value) => {
                    return value.every((photo) => {
                        return (
                            typeof photo.id === 'number' && typeof photo.url === 'string'
                        );
                    });
                },
            },
        },
        data() {
            return {
                currentPhoto: null,
            };
        },
        methods: {
            updateCurrentPhoto(photo) {
                this.currentPhoto = photo;
            }
        }
    }
</script>

<style scoped>
    .photo-slider {
        display: flex;
        flex-direction: row;
        width: fit-content;
        width: 60%;
    }
    .mini-photos {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        padding-right: 20px;
        width: 25%;
    }
    .current-photo {
        height: inherit;
        width: 100%;
    }

    .displayed-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
