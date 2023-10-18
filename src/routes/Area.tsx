import useGetAreas from '../hooks/useGetAreas';
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepiesByArea } from '../hooks/useGetRecepiesByArea';

const Area = () => {
    const { value, loading, error } = useGetAreas();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies, valueSearch, handleSearchValueChange, getSearchValueFunction } = useGetRecepiesByArea();
    console.log(recepies);

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
                            elements={value?.map(v => v.strArea) || []}
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
                        recepies?.map(recepie => <h1>{recepie.strMeal}</h1>)
            }
        </div>
    )
}

export default Area
