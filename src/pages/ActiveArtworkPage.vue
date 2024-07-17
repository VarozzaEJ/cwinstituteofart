<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import { artworksService } from '../services/ArtworksService.js';
import Pop from '../utils/Pop.js';
import { Artwork } from '../models/Artwork.js';
import { AppState } from '../AppState.js';
import { computed } from 'vue';
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ActiveArtworkCard />

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>