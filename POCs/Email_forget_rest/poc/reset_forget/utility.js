const OMDB_ENDPOINT = {
  fetchCurrentMovies: "batman",
  fetchTopRated: "avengers",
  fetchTrending: "marvel",
  fetchPopular: "spiderman",
  fetchUpcoming: "superman",
  fetchActionMovies: "john wick",
  fetchComedyMovies: "hangover",
  fetchHorrorMovies: "conjuring",
  fetchRomanceMovies: "titanic",
  fetchAnimeMovies: "naruto",
};

async function getMediaList(searchTerm) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchTerm}`;

console.log("URL:", url);

    const response = await fetch(url);
    const data = await response.json();

console.log("Data:", data);

    return {
      results: data.Search || [],
    };
  } catch (error) {
    console.log(error);

    return {
      results: [],
    };
  }
}
module.exports = {
  getMediaList,
  OMDB_ENDPOINT,
};