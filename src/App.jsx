import { useState } from 'react';
import movieData from './data/movieData.json';

function App() {

  const [movieList, setMovieList] = useState(movieData)

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

  return (
    <main>

      <div>
        <select name="select">
          <option value={null}>Seleziona un genere</option>
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
            {renderMovieList(movieList)}
          </tbody>
        </table>
      </div>
    
    </main>
  )
}

export default App
