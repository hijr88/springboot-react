import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');
  return (
    <div>{keyword}</div>
  );
}

export default Search;