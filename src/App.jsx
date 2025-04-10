import { useState } from 'react';
import movieData from './data/movieData.json';

function App() {

  const [movieList, setMovieList] = useState(movieData)

  const renderMovieList = (list) => {
    return list.map((movie, i) => 
      <tr key={i}>
        <td>{movie.title}</td>
        <td>{movie.genre}</td>
      </tr>
    )
  };

  return (
    <main>
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
