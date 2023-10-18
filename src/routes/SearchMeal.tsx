import InputSearch from '../components/common/InputSearch'
import PageContainer from '../components/common/PageContainer'
import RecepieCard from '../components/common/RecepieCard';
import useSearchRecepieByName from '../hooks/useSearchRecepieByName';
import '../scss/main.scss'

const SearchMeal = () => {
    const { recepies, error, loading, name, handleChangeMealValue } = useSearchRecepieByName();
    console.log({ recepies, error, loading, name, handleChangeMealValue })
    return (
        <PageContainer>
            <InputSearch handleChange={handleChangeMealValue} value={name} />
            {
                error ?
                    <p>{error}</p>
                    :
                    loading
                        ?
                        <h1>Loading..</h1>
                        :
                        <div className='recepies'>
                            {
                                recepies?.map((v, index) =>
                                    <RecepieCard
                                        recepieId={v.idMeal}
                                        image={v.strMealThumb}
                                        recepieName={v.strMeal}
                                        category={v.strCategory}
                                        region={v.strArea}
                                        key={`${index}__meals__search`}
                                    />
                                )
                            }
                        </div>

            }
        </PageContainer>
    )
}

export default SearchMeal