import { useEffect, useState } from 'react';
import movieData from './data/movieData.json';

export default function App() {

  const [movieList, setMovieList] = useState(movieData);
  const [filteredMovieList, setFilteredMovieList] = useState(movieData);
  const [movieGenre, setMovieGenre] = useState('');
  

  const renderMovieList = (list) => {
    return list.map((movie, i) => 
      <tr key={movie.title.toLowerCase()+`-${i}`}>
        <td>{movie.title}</td>
        <td>{movie.genre}</td>
      </tr>
    )
  };
  
  const movieGenres = movieList.map((movie, i) => 
    <option key={movie.genre.toLowerCase()+`-${i}`} value={movie.genre}>
      {movie.genre}
    </option>
  );


  useEffect(() => {
    if (movieGenre === '') {
      setFilteredMovieList(movieList);
    } else {
      const filteredList = movieList.filter(movie => movie.genre === movieGenre);
      setFilteredMovieList(filteredList);
    };
  }, [movieGenre, movieList]);


  return (
    <main>

      <div>
        <select name="select" value={movieGenre} onChange={(e) => setMovieGenre(e.target.value)}>
          <option value="">Seleziona un genere</option>
          {movieGenres}
        </select>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {renderMovieList(filteredMovieList)}
          </tbody>
        </table>
      </div>
    
    </main>
  )
};