import Core from "../index";

/**
 * List of endpoints of the Movie API
 */
// const endpoints = {
//   popularMovies: `${Core.host}/${
//     Core.config.apiVersion
//   }/discover/movie?sort_by=popularity.desc`
// };

/**
 * Get Movies By Popularity
 * Using `discover` endpoint
 * @param {*} params
 */
const getMoviesByPopularity = async () => {
  try {
    const result = await fetch(
      `${Core.host}/${
        Core.config.apiVersion
      }/discover/movie?sort_by=popularity.desc`
    );
    return result;
  } catch (error) {
    throw new Error();
    return error;
  }
};

export default {
  getMoviesByPopularity
};
