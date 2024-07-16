<script setup>
import { AppState } from '../AppState.js';
import { artworksService } from '../services/ArtworksService.js';
import Pop from '../utils/Pop.js';
import { computed } from 'vue';


const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changePage(pageNumber) {
    try {
        await artworksService.changePage(pageNumber)
    }
    catch (error) {
        Pop.error(error);
    }
}


</script>

<!-- v-if="!searchingFor" -->
<template>
    <section class="row justify-content-between my-2">
        <button :disabled="currentPage == 1" class="col-3 btn btn-primary" @click="changePage(currentPage - 1)"><i
                class="mdi mdi-arrow-left"></i> Previous</button>
        <div class="col-3 text-center fw-bold">{{ currentPage }} of {{ totalPages }}</div>
        <button :disabled="currentPage == totalPages" @click="changePage(currentPage + 1)"
            class="col-3 btn btn-primary">Next<i class="mdi mdi-arrow-right"></i></button>
    </section>
</template>


<style lang="scss" scoped></style>