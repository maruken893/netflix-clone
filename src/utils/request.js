// const API_KEY = process.env.API_KEY
const API_KEY = "cf8eca3205c9fba954943af1f289fe23"

export const requests ={
  feachTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}