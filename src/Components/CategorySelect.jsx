import React, { useState } from 'react';
import { useFetch } from './useFetch';


function CategorySelect () {
    const { data } = useFetch("https://eock031zmoorept.m.pipedream.net/v1/products");
    const [selectCategory, setSelectCategory] = useState("");

    const filteredData = data ? data.filter(item => selectCategory ? item.CategoryName === selectCategory : true) : [];

    

    const categories = data ? [...new Set(data.map(item => item.CategoryName))] : [];

    return (
        <div>
            <select onChange={(e) => {setSelectCategory(e.target.value);}}>
            <option value="">Todas las categorias</option>
            {categories.map(category => (<option key={category} value={category}>{ category }</option>))}
            </select>
        </div>
    );
}

export default CategorySelect;

