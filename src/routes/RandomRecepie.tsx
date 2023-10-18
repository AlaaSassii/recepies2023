import useGetRandomRecepie from '../hooks/useGetRandomRecepie'
import { IoReloadOutline } from 'react-icons/io5'
import RecepieInfoHeader from '../components/specify/RecepieInfoHeader'
import RecepieInfoDescription from '../components/specify/RecepieInfoDescription'
const RandomRecepie = () => {
    const { randomRecepie, loading, error, getRandomRecpieFunction } = useGetRandomRecepie()

    const ingredients = Object.values(randomRecepie || {})
        .filter((v, i) => Object.keys(randomRecepie || {})[i].includes('strIngredient'))
        .filter(v => v !== '')

    const ingredientsAmount = Object.values(randomRecepie || {})
        .filter((v, i) => Object.keys(randomRecepie || {})[i].includes('strMeasure'))
        .slice(0, ingredients.length)

    console.log({ strMealThumb: randomRecepie?.strMealThumb, ingredients, ingredientsAmount, randomRecepie })
    return (
        <div>
            {
                error
                    ?
                    <h1>Error</h1>
                    :
                    loading
                        ?
                        <div>loading..</div>
                        :
                        <div className="meal__info">
                            <div>
                                <h1>{randomRecepie?.strMeal}</h1>
                                <button onClick={() => { getRandomRecpieFunction() }}>Reload <IoReloadOutline /></button>
                            </div>
                            <RecepieInfoHeader
                                image={randomRecepie?.strMealThumb as string}
                                ingredients={ingredients as string[]}
                                ingredientsAmount={ingredientsAmount as string[]}

                            />
                            <RecepieInfoDescription
                                recepie={randomRecepie?.strInstructions as string}
                                videoLink={randomRecepie?.strYoutube as string}
                            />

                        </div>
            }
        </div>
    )
}

export default RandomRecepie