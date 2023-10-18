import useGetCategories from '../hooks/useGetCategories'
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepieByCategory } from '../hooks/useGetRecepiesByCategory';

const Categories = () => {
    const { value, loading, error } = useGetCategories();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies, valueSearch, handleSearchValueChange, getSearchValueFunction } = useGetRecepieByCategory();

    return (
        <div>
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
                            dropDownTilte='ingredient..'
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
                        recepies?.map(recepie => <h1 >{recepie.strMeal}</h1>)
            }
        </div>
    )
}

export default Categories
// strCategory