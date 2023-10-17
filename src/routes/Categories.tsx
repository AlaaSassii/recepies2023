import useGetCategories from '../hooks/useGetCategories'
import SelectDropdown from '../components/common/SelectDropdown';

const Categories = () => {
    const { value, loading, error } = useGetCategories();

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
                            key='categorie'
                        />
            }
        </div>
    )
}

export default Categories