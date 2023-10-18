import useGetIngredients from '../hooks/useGetIngredients';
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepieByIngredient } from '../hooks/useGetRecepiesByIngredient';
import RecepieCard from '../components/common/RecepieCard';

const Ingredient = () => {
    const { value, loading, error } = useGetIngredients();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies, valueSearch, handleSearchValueChange, getSearchValueFunction } = useGetRecepieByIngredient();

    return (
        <div className='container'>
            {
                error
                    ?
                    <h1>{error}</h1>
                    :
                    <SelectDropdown
                        dropDownTilte='Search Ingredient'
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
                        recepies?.map((recepie, index) =>
                            <RecepieCard
                                image={recepie.strMealThumb}
                                recepieId={recepie.idMeal}
                                recepieName={recepie.strMeal}
                                key={`${index}__ingredient`}
                            />)
            }
        </div>
    )
}

export default Ingredient