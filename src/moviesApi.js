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
