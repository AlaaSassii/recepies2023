import InputSearch from '../components/common/InputSearch'
import Loading from '../components/common/Loading';
import PageContainer from '../components/common/PageContainer'
import RecepieCard from '../components/common/RecepieCard';
import useSearchRecepieByName from '../hooks/useSearchRecepieByName';
import '../scss/main.scss'

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