export default class MoviesAPIService {
  BASE_URL = 'https://api.themoviedb.org/3/';

  API_KEY =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTNmNDQ0YzhjOTIzYjEwNGFiMzkzZDlmZmY0NzM3NSIsInN1YiI6IjY0NzUyYTBiYzI4MjNhMDBjNDIxNDA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJ9yqsOyNyT3w7GuPXqWWQIZSuAsjemKs2vv1aIwq24';

  options = {
    headers: {
      Authorization: `Bearer ${this.API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  async getTrends() {
    const response = await fetch(
      `${this.BASE_URL}trending/all/day`,
      this.options
    );

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  }

  async getQuery(query) {
    const response = await fetch(
      `${this.BASE_URL}search/movie?query=${query.trim()}`,
      this.options
    );

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  }

  async getMovieDetails(movieID) {
    const response = await fetch(
      `${this.BASE_URL}movie/${movieID}`,
      this.options
    );

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  }

  async getMovieCredits(movieID) {
    const response = await fetch(
      `${this.BASE_URL}movie/${movieID}/credits`,
      this.options
    );

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  }

  async getMovieReviews(movieID) {
    const response = await fetch(
      `${this.BASE_URL}movie/${movieID}/reviews`,
      this.options
    );

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  }
}