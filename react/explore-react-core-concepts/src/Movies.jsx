import Movie from "./Movie";

export default function Movies({ movies }) {
    return (
        <div>
            <h3>Movies: {movies.length}</h3>
            {
                movies.map(movie => <Movie movie={movie}></Movie>)
            }
        </div>
    );
} 