import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import { useTheme } from '../../hook/useTheme';


// Style
import './Recipe.css'

export default function Recipe() {

  const { id } = useParams()
  const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)
  const { mode } = useTheme

  return (
    <div className={`recipe ${mode}`}>
      { error && <p className='error'>{error}</p> }
      { isPending && <p className="loading">Loading...</p> }
      { console.log(recipe) }
      {/* { recipe && recipe.method } */}
      { recipe && (<>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
          { recipe.ingredients.map(ing => <li key={ing}>{ing}</li> ) }
        </ul>
        <p className='method'>{recipe.method}</p>
      </>) }
    </div>
  );
}
