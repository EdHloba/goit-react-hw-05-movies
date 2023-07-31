import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrendMovies = ({ movies }) => {
  return <div>
    <ul>
      {movies.map(({id, title, name}) => {
        return <li key={id}>
          <Link to={`movies/${id}`}>
            {title || name}
          </Link>
        </li>
      })}
    </ul>
  </div>
};

TrendMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  // locationState: PropTypes.object.isRequired,
};

export default TrendMovies;
