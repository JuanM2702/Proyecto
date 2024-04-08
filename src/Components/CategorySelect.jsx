import React from 'react';

const CategorySelect = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas las categorías</option>
            {categories && categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}

export default CategorySelect;
