"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryMovies = exports.getReivews = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const movieApiUrl = 'https://api.nytimes.com/svc/movies/v2';
const picksUrl = `${movieApiUrl}/reviews/picks.json?api-key=${process.env.NYTIMES_API_KEY}`;

const getReivews = async () => {
  const axiosResponse = await _axios.default.get(picksUrl);
  const data = axiosResponse.data.results;
  return data;
};

exports.getReivews = getReivews;

const queryMovies = async movie => {
  const queryUrl = `${movieApiUrl}/reviews/search.json?query=${movie}&api-key=${process.env.NYTIMES_API_KEY}`;
  console.log(queryUrl);
  const response = await _axios.default.get(queryUrl);
  const data = response.data.results;
  return data;
};

exports.queryMovies = queryMovies;
//# sourceMappingURL=moviesApi.js.map