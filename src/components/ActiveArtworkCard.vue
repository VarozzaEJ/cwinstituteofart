<script setup>
import { RouterLink } from 'vue-router';
import { Artwork } from '../models/Artwork.js';
import Pop from '../utils/Pop.js';
import { artworksService } from '../services/ArtworksService.js';


defineProps({ artwork: Artwork })

</script>


<template>
    <RouterLink :to="{ name: 'Active Artwork', params: { artworkId: artwork.id } }">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="card-img img-fluid" :src="`${artwork.imgUrl.raw}`" alt="">
                </div>
            </div>
        </div>
    </RouterLink>
</template>


<style lang="scss" scoped></style>