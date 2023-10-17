import useGetIngredients from '../hooks/useGetIngredients';
import SelectDropdown from '../components/common/SelectDropdown';

const Ingredient = () => {
    const { value, loading, error } = useGetIngredients();
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
                            key='categorie'
                        />
            }
        </div>
    )
}

export default Ingredient