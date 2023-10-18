import useGetIngredients from '../hooks/useGetIngredients';
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepieByIngredient } from '../hooks/useGetRecepiesByIngredient';

const Ingredient = () => {
    const { value, loading, error } = useGetIngredients();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies } = useGetRecepieByIngredient();

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
                            key='categorie'
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
                        recepies?.map(recepie => recepie.strMeal)
            }
        </div>
    )
}

export default Ingredient