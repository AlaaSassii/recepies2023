import InputSearch from '../components/common/InputSearch'
import Loading from '../components/common/Loading';
import PageContainer from '../components/common/PageContainer'
import MealCard from '../components/specify/MealCard';
import useSearchRecepieByName from '../hooks/useSearchRecepieByName';

const SearchMeal = () => {
    const { recepies, error, loading, name, handleChangeMealValue } = useSearchRecepieByName();
    return (
        <PageContainer>
            <InputSearch handleChange={handleChangeMealValue} value={name} />
            {
                error ?
                    <p>error</p>
                    :
                    loading
                        ?
                        <Loading />
                        :
                        <div className='meals__container'>
                            {
                                recepies?.map((v, index) => <MealCard
                                    idMeal={v.idMeal}
                                    strMeal={v.strMeal}
                                    strMealThumb={v.strMealThumb}
                                    strArea={v.strArea}
                                    strCategory={v.strCategory}
                                    key={`meal___${index}`}

                                />)
                            }
                        </div>

            }
        </PageContainer>
    )
}

export default SearchMeal