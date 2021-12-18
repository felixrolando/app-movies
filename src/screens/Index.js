import {useState,useEffect,useCallback} from 'react';
import debounce from 'lodash/debounce';
import {
  Header,
  InputSearch,
  Wrapper,
  Movie,
  MovieImg,
  MovieTitle,
} from "../components/index";

import { MoviesList } from "./movies";

export function App() {

  const [movies,setMovies] = useState(MoviesList);
  const [querySearch, setQuerySearch] = useState('');

  const debouncedChangeHandler = useCallback(
    debounce((query, cb) => {
      filterMovie(query, cb);
    }, 500),
    [],
  );

  const filterMovie=(query,cb)=>{
    if (query == ''){
      setMovies(MoviesList);
      return;
    }
    const filter = movies.filter((mov)=>{
       return  mov.title.toLowerCase().includes(query.toLowerCase())
    });

    cb(filter);
  
  }

  useEffect(()=>{
    debouncedChangeHandler(querySearch, (res) => {
      setMovies(res);
    });
  },[querySearch])

  return (
    <>
      <Header>
        <InputSearch value={querySearch} onChange={(event)=>setQuerySearch(event.target.value)} />
      </Header>
      <Wrapper>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <MovieImg src={movie.img} />
              <MovieTitle>{movie.title}</MovieTitle>
            </Movie>
          );
        })}
      </Wrapper>
    </>
  );
}

export default App;
