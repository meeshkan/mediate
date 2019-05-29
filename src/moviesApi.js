import axios from 'axios';

const movieApiUrl = 'https://api.nytimes.com/svc/movies/v2';
const picksUrl = `${movieApiUrl}/reviews/picks.json?api-key=${
  process.env.NYTIMES_API_KEY
}`;


export const getReivews = async () => {
  const axiosResponse = await axios.get(picksUrl);
  const data = axiosResponse.data.results;
  return data;
};

export const queryMovies = async (movie) => {
  const queryUrl = `${movieApiUrl}/reviews/search.json?query=${movie}&api-key=${
    process.env.NYTIMES_API_KEY
  }`
  console.log(queryUrl)
  const response = await axios.get(queryUrl)
  const data = response.data.results
  return data
}
