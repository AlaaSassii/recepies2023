import React from 'react'
import useGetCategories from '../hooks/useGetCategories'
import SelectDropdown from '../components/common/SelectDropdown';

const Categories = () => {
    const { value, loading, error } = useGetCategories();
    console.log({ value, loading, error })
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
                            elements={value?.meals?.map(c => c?.strCategory) || []}
                            loading={loading}
                            key='categorie'
                        />
            }
        </div>
    )
}

export default Categories