import { NavLink, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <p className={css.Logo}>
          <span>MoviesSearch</span>
        </p>
        <nav className={css.Navigation}>
          <NavLink className={css.Link} to='/'>Home</NavLink>
          <NavLink className={css.Link} to='/movies'>
            Movies
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MoviesDetails/>}/>
      </Routes>
    </div>
  );
};
