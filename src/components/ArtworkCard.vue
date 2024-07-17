<script setup>
import { RouterLink } from 'vue-router';
import { Artwork } from '../models/Artwork.js';
import Pop from '../utils/Pop.js';
import { artworksService } from '../services/ArtworksService.js';


defineProps({ artwork: Artwork })

async function admireArt(artworkId) {
    try {
        await artworksService.admireArt(artworkId)
        Pop.toast("Artwork has been added to your liked pieces")
    }
    catch (error) {
        Pop.error(error);
    }
}

async function setActiveArtwork(artworkId) {
    try {
        await artworksService.setActiveArtwork(artworkId)
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <!-- <RouterLink :to="{ name: 'Active Artwork', params: { artworkId: artwork.id } }"> -->
    <div :artwork="artwork">
        <div @click="admireArt(artwork.id), setActiveArtwork(artwork.id)">
            <div class="card selectable">
                <img class="card-img img-fluid" :src="`${artwork.imgUrl.regular}`" alt="">
            </div>
        </div>
    </div>
    <!-- </RouterLink> -->
</template>


<style lang="scss" scoped></style>