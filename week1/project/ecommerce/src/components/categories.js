import React from 'react';

const Categories = ({ setSelectCategory, handleFiltre, selectCat, categories }) => {
    const categoryHead = categories.map((category, index) => {
        return <button
            key={index}
            className={selectCat === index ? "active" : "non-active"}
            onClick={() => { handleFiltre(category); setSelectCategory(index); }}>{category}
        </button>;
    });
    return (
        <nav>{categoryHead}</nav>
    );
};

export default Categories;