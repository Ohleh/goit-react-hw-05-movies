import { useState } from 'react';

const Searchbar = ({ onOnSubmit }) => {
  // const location = useLocation();

  const [queryMessage, setQueryMessage] = useState('');

  const handleChange = e => {
    setQueryMessage(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onOnSubmit(queryMessage);
    setQueryMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={queryMessage === ''}>
          🔍
        </button>

        <input
          value={queryMessage}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </form>
    </>
  );
};

export default Searchbar;
