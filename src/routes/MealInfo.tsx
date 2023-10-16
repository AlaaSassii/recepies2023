import useGetMealInfo from '../hooks/useGetMealInfo';
import { useParams } from 'react-router-dom'
import PageContainer from '../components/common/PageContainer';
import Loading from '../components/common/Loading';
const MealInfo = () => {

    const { id } = useParams();
    const { Meal, loading, error } = useGetMealInfo(id)
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
                            <h1>{Meal?.strDrinkAlternate}</h1>
                        </div>

            }
        </PageContainer>
    )
}

export default MealInfo