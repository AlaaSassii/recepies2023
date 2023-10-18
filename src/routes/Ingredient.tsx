import useGetIngredients from '../hooks/useGetIngredients';
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepieByIngredient } from '../hooks/useGetRecepiesByIngredient';

const Ingredient = () => {
    const { value, loading, error } = useGetIngredients();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies, valueSearch, handleSearchValueChange, getSearchValueFunction } = useGetRecepieByIngredient();

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
                            elements={value?.map(v => v.strIngredient) || []}
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

export default Ingredient