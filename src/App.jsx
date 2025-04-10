import { useEffect, useState } from 'react';
import movieData from './data/movieData.json';

export default function App() {

  const [movieList, setMovieList] = useState(movieData);
  const [filteredMovieList, setFilteredMovieList] = useState(movieData);
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newMovieGenre, setNewMovieGenre] = useState('');
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
    if (movieGenre === '') return setFilteredMovieList(movieList);

    const filteredList = movieList.filter(movie => movie.genre.toLowerCase() === movieGenre.toLowerCase());
    setFilteredMovieList(filteredList);
  }, [movieGenre, movieList]);


  const addNewMovie = (event) => {
    event.preventDefault();

    if ([newMovieTitle, newMovieGenre].some(element => element.trim() === '')) return alert(`Input non valido`);

    setMovieList([...movieList, { title: newMovieTitle, genre: newMovieGenre }]);
    setNewMovieTitle('');
    setNewMovieGenre('');
  };


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
              <th>Titolo</th>
              <th>Genere</th>
            </tr>
          </thead>
          <tbody>
            {renderMovieList(filteredMovieList)}
          </tbody>
        </table>
      </div>
    
      <div>
        <form onSubmit={addNewMovie}>
          <input type="title" value={newMovieTitle} placeholder='Titolo film' onChange={e => setNewMovieTitle(e.target.value)}/>
          <input type="genre" value={newMovieGenre} placeholder='Genere film' onChange={e => setNewMovieGenre(e.target.value)}/>
          <button type="submit">Aggiungi</button>
        </form>
      </div>

    </main>
  )
};