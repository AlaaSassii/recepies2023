import useGetAreas from '../hooks/useGetAreas';
import SelectDropdown from '../components/common/SelectDropdown';
import { useGetRecepiesByArea } from '../hooks/useGetRecepiesByArea';
import RecepieCard from '../components/common/RecepieCard';

const Area = () => {
    const { value, loading, error } = useGetAreas();
    const { error: recepiesError, getRecepie, loading: recepiesPending, recepies, valueSearch, handleSearchValueChange, getSearchValueFunction } = useGetRecepiesByArea();
    console.log(recepies);

    return (
        <div className='container'>
            {
                error
                    ?
                    <h1>{error}</h1>
                    :
                    <SelectDropdown
                        dropDownTilte='Search Area'
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
                        recepies?.map((recepie, index) =>
                            <RecepieCard
                                image={recepie.strMealThumb}
                                recepieId={recepie.idMeal}
                                recepieName={recepie.strMeal}
                                key={`${index}__area`}
                            />)
            }
        </div>
    )
}

export default Area
