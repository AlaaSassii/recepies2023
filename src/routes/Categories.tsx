import useGetCategories from '../hooks/useGetCategories'
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepieByCategory } from '../hooks/useGetRecepiesByCategory';
import RecepieCard from '../components/common/RecepieCard';
import '../scss/main.scss'
const Categories = () => {
    const { value, loading, error } = useGetCategories();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies, valueSearch, handleSearchValueChange, getSearchValueFunction } = useGetRecepieByCategory();

    return (
        <div className='container'>
            {
                error
                    ?
                    <h1>{error}</h1>
                    :
                    loading
                        ?
                        <p>loading..</p>
                        :
                        <SelectDropdown
                            dropDownTilte='Search Category'
                            elements={value?.map(v => v.strCategory) || []}
                            loading={loading}
                            getRecepie={getRecepie}
                            selectDropDownValue={valueSearch}
                            handleChangeSlectDropDown={handleSearchValueChange}
                            getSearchValueFunction={getSearchValueFunction}
                        />
            }
            {
                recepiesError
                    ?
                    <h1>{recepiesError}</h1>
                    :
                    recepiesPending
                        ?
                        <p>loading..</p>
                        :
                        <div className='recepies'>
                            {recepies?.map((recepie, index) =>
                                <RecepieCard
                                    image={recepie.strMealThumb}
                                    recepieId={recepie.idMeal}
                                    recepieName={recepie.strMeal}
                                    key={`${index}__categories`}
                                />)}
                        </div>
            }
        </div>
    )
}

export default Categories
// strCategory