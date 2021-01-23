const APIKEY = '3c9ce8e6b70419c4e30672da076b963a'

export const requests = {
  netflixFeatureOriginal: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  genreId: `genre/movie/list?api_key=${APIKEY}&language=en-US`,
  getVideoLink: `movie/63174/videos?api_key=${APIKEY}`,
}
