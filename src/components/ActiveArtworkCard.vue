<script setup>
import { Artwork } from '../models/Artwork.js';
import Pop from '../utils/Pop.js';
import { artworksService } from '../services/ArtworksService.js';
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';


defineProps({ artworkProp: { type: Artwork } })
const artworks = computed(() => AppState.artworks)
const activeArtwork = computed(() => AppState.activeArtwork)






</script>


<template>


    <div class="container">
        <div class="row">
            <div class="col-12">
                <img class="card-img img-fluid" :src="artworkProp.imgUrl" alt="">
                <h1>{{ artworkProp.description }}</h1>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped></style>