import useGetAreas from '../hooks/useGetAreas';
import SelectDropdown from '../components/common/SelectDropdown';

const Area = () => {
    const { value, loading, error } = useGetAreas();

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
                            key='categorie'
                        />
            }
        </div>
    )
}

export default Area