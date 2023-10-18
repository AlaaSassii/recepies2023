import useGetMealInfo from '../hooks/useGetMealInfo';
import { useParams } from 'react-router-dom'
import PageContainer from '../components/common/PageContainer';
import Loading from '../components/common/Loading';
import RecepieInfoHeader from '../components/specify/RecepieInfoHeader';
import RecepieInfoDescription from '../components/specify/RecepieInfoDescription';
const MealInfo = () => {

    const { id } = useParams();
    const { Meal, loading, error, ingredients, ingredientsAmount } = useGetMealInfo(id)
    console.log({ strYoutube: Meal?.strYoutube })
    return (
        <PageContainer>
            {
                error
                    ?
                    <h1>{error}</h1>
                    :
                    loading
                        ?
                        <Loading />
                        :
                        <div className="meal__info">
                            <h1>{Meal?.strMeal}</h1>
                            <RecepieInfoHeader
                                image={Meal?.strMealThumb as string}
                                ingredients={ingredients as string[]}
                                ingredientsAmount={ingredientsAmount as string[]}

                            />
                            <RecepieInfoDescription
                                recepie={Meal?.strInstructions as string}
                                videoLink={Meal?.strYoutube as string}
                            />

                        </div>

            }
        </PageContainer>
    )
}

export default MealInfo