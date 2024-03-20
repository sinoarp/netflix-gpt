
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <img 
      className='fixed -z-10'
      src={BG_URL} alt="logo" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;