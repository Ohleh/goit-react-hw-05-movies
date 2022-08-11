export function MovieDetailsRender({ details }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
        alt={details.title}
      />
      <h1>
        {details.title}(
        {details.release_date && details.release_date.split('-')[0]})
      </h1>
      <p>User Score: {details.vote_count}%</p>
      <h3>Overwiev</h3>
      <p>{details.overview}</p>
      <h3>Genres</h3>

      {details.genres &&
        details.genres.map(g => <span key={g.name}>{g.name} </span>)}
    </div>
  );
}
