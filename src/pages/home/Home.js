//import { useFetch } from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';

// Style 
import './Home.css'


export default function Home() {
  //const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if(snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    // Clean up function
    return () => unsub()

  }, [])

  return (
    <div>
      { error && <p className='error'>{error}</p> }
      { isPending && <p className="loading">Loading...</p> }
      { data && <RecipeList recipes={data} /> }
    </div>
  );
}
