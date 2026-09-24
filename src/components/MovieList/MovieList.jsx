import { useLocation } from "react-router-dom";
import { List, Item, MovieLink } from "./MovieList.styled.js";

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map((movie) => (
        <Item key={movie.id}>
          <MovieLink state={{ location }} to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
}
export default MovieList;