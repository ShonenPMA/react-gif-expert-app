import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
const GiftExpertApp = () => {

    // const categories = [
    //     'One Punch',
    //     'Samurai X',
    //     'Dragon Ball'
    // ];

    const [categories, setCategories] = useState([
            'Code Geass',

    ])


    // const handleAdd = () => 
    // {
    //     // setCategories([...categories, 'Hunter X Hunter' ])
    //     setCategories(cats => [...cats, 'Hunter X Hunter'])
    // }

    return (
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            { categories.map((category) => 
                // <li key={category}>{category}</li>
                <GifGrid category={category} key={category}/> 
            )}
        </ol>
        
        </>
    )
}

export default GiftExpertApp
