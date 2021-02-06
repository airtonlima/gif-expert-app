import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <React.Fragment>
            
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />
            
            <hr />

            {
                categories.map((elm, idx) => 
                
                    <GifGrid 
                        key={ elm }
                        category={ elm } 
                    />
                )
            }
        </React.Fragment>
    );
}