import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Artwork } from "../models/Artwork.js"


class ArtworksService {
  setActiveArtwork(artworkId) {
    console.log("IS THIS WORKING????");
  }
  async discoverArtwork() {
    const response = await api.get('https://sandbox.codeworksacademy.com/api/artworks')
    const artwork = response.data.artworks.map(artworkData => new Artwork(artworkData))
    AppState.artworks = artwork
    console.log(AppState.artworks);
    AppState.totalPages = response.data.pages
  }
  async changePage(pageNumber) {
    const response = await api.get(`https://sandbox.codeworksacademy.com/api/artworks?page=${pageNumber}`)
    console.log('🖌️🖌️🖌️', response.data);
    const artwork = response.data.artworks.map(artworkData => new Artwork(artworkData))
    AppState.artworks = artwork
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
  async admireArt(artworkId) {

    const response = await api.post(`https://sandbox.codeworksacademy.com/api/artworks/${artworkId}/admire`)
    console.log(response);
  }

}

export const artworksService = new ArtworksService()