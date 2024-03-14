import './Movie.css';

export default function Movie({ movie }) {
    const {title, releaseDate} = movie;
    return (
        <div className='movie'>
            <h3>Movie Name: {title}</h3>
            <p>Release Date: {releaseDate}</p>
        </div>
    )
}