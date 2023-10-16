import InputSearch from '../components/common/InputSearch'
import Loading from '../components/common/Loading';
import PageContainer from '../components/common/PageContainer'
import MealCard from '../components/specify/MealCard';
import useSearchMealByName from '../hooks/useSearchMealByName';

const SearchMeal = () => {
    const { searchTerm, searchResults, handleChangeMealValue, loading, error } = useSearchMealByName();
    return (
        <PageContainer>
            <InputSearch handleChange={handleChangeMealValue} value={searchTerm} />
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
                                searchResults?.map((v, index) => <MealCard
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