import React, { useState } from 'react'
import PropTypes from 'prop-types'
const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => 
    {
        event.preventDefault();
        if(inputValue.trim().length > 0)
        {
            setCategories(categories => [inputValue,...categories])
            setInputValue('')
        }
    }

    return (
        <form  onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory
