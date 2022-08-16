const CastRender = ({ cast }) => {
  return (
    <ul>
      {cast.map(cst => (
        <li key={cst.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${cst.profile_path}`}
            alt={cst.name}
          />
          <p> {cst.name}</p>
          <p>Character: {cst.character ?? 'individual character'}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastRender;
