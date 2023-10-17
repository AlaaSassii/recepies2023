import useGetAreas from '../hooks/useGetAreas';
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepiesByArea } from '../hooks/useGetRecepiesByArea';

const Area = () => {
    const { value, loading, error } = useGetAreas();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies } = useGetRecepiesByArea();
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
                            dropDownTilte='areas..'
                            elements={value?.map(v => v.strArea) || []}
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

export default Area