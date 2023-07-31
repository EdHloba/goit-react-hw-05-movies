import { useState, useEffect } from 'react';
import TrendMovies from 'components/TrendMovies';
import MoviesAPIService from 'moviesAPI';

const moviesAPI = new MoviesAPIService();

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTrends = async () => {
    try {
      const data = await moviesAPI.getTrends();
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <h2>Trending today</h2>
      <TrendMovies movies={movies} />
    </>
  );
};

export default Home;
