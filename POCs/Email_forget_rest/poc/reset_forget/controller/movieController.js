const { getMediaList, OMDB_ENDPOINT } =
  require("../utility");

// Current Movies API
async function getCurrentMovies(req, res) {
  try {
    const currentMovieList = await getMediaList(
      OMDB_ENDPOINT.fetchCurrentMovies
    );

    res.status(200).json({
      status: "success",
      message: currentMovieList,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

// Top Rated API
async function topRated(req, res) {
  try {
    const currentMovieList = await getMediaList(
      OMDB_ENDPOINT.fetchTopRated
    );

    res.status(200).json({
      status: "success",
      message: currentMovieList,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

module.exports = {
  getCurrentMovies,
  topRated,
};