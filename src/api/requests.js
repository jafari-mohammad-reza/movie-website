const requests = {
  fetchTrending: `/trending/all/week?api_key=90f19495d45862a32ed30dc979dc48f2&language=em-US`,
  fetchNetflixOriginals: `discover/tv?api_key=90f19495d45862a32ed30dc979dc48f2&language=em-US`,
  fetchTopRated: `movie/top_rated?api_key=90f19495d45862a32ed30dc979dc48f2&language=em-US`,
  fetchActionMovies: `discover/movie?api_key=90f19495d45862a32ed30dc979dc48f2&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=90f19495d45862a32ed30dc979dc48f2&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=90f19495d45862a32ed30dc979dc48f2&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=90f19495d45862a32ed30dc979dc48f2&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=90f19495d45862a32ed30dc979dc48f2&with_genres=99`,
};
export default requests;
