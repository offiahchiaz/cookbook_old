import { useFetch } from '../../hook/useFetch';
import RecipeList from '../../components/RecipeList';

// Style 
import './Home.css'


export default function Home() {
  const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div>
      { error && <p className='error'>{error}</p> }
      { isPending && <p className="loading">Loading...</p> }
      { recipes && <RecipeList recipes={recipes} /> }
    </div>
  );
}
