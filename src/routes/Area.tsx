import React from 'react'
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
                            dropDownTilte='categories..'
                            elements={value?.map(v => v.strCategory) || []}
                            loading={loading}
                            key='categorie'
                        />
            }
        </div>
    )
}

export default Area