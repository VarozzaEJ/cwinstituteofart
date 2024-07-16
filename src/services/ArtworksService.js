import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Artwork } from "../models/Artwork.js"


class ArtworksService {
  async discoverArtwork() {
    const response = await api.get('https://sandbox.codeworksacademy.com/api/artworks')
    const artwork = response.data.artworks.map(artworkData => new Artwork(artworkData))
    AppState.artworks = artwork
    console.log(AppState.artworks);
  }

}

export const artworksService = new ArtworksService()