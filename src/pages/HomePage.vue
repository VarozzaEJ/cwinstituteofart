<script setup>
import { onMounted } from 'vue';
import { artworksService } from '../services/ArtworksService.js';
import Pop from '../utils/Pop.js';
import { Artwork } from '../models/Artwork.js';
import { AppState } from '../AppState.js';
import { computed } from 'vue';



onMounted(discoverArtwork)

const artworks = computed(() => AppState.artworks)

async function discoverArtwork() {
  try {
    await artworksService.discoverArtwork()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>

<template>
  <div class="row">
    <div v-for="artwork in artworks" :key="artwork.originalLink" class="col-3">
      <div class="card selectable">
        <img class="card-img img-fluid" :src="`${artwork.imgUrl.regular}`" alt="">
        <div class="card-body">
          <p class="fs-4 card-title text-center fw-bold text-primary">{{ artwork.description.slice(0, 35) }}</p>
          <p class="text-end fw-bold m-0">

          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
