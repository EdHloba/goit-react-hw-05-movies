import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MoviesAPIService from 'moviesAPI';
import MoviePage from 'components/MoviePage';

const moviesAPI = new MoviesAPIService();

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await moviesAPI.getMovieDetails(movieId);
        setDetails(data);
      } catch (error) {
        console.log(error.massage);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
    <>
      <MoviePage MovieDetails={details} />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
