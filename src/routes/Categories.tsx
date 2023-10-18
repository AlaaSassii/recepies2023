import useGetCategories from '../hooks/useGetCategories'
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepieByCategory } from '../hooks/useGetRecepiesByCategory';

const Categories = () => {
    const { value, loading, error } = useGetCategories();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies } = useGetRecepieByCategory();

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
                            dropDownTilte='categories..'
                            elements={value?.map(v => v.strCategory) || []}
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
                // recepies?.map(recepie => recepie.strMeal)
            }
        </div>
    )
}

export default Categories