import React, { useState } from "react";
import { useFetch } from "../Components/useFetch";
import { Link } from "react-router-dom";

function Inicio () {
    const { data, loading, error } = useFetch("https://eock031zmoorept.m.pipedream.net/v1/products");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, ] = useState(10);
    const [selectedCategory, setSelectedCategory] = useState("");

    // Realizar filtro de categorias
    const filteredData = data ? data.filter(item => selectedCategory ? item.CategoryName === selectedCategory : true) : [];



    // Get current itemss
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    //Barra de busqueda

    // Paginación
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const categories = data ? [...new Set(data.map(item => item.CategoryName))] : [];

    

    return (
        <>
            <div>
                <select onChange={(e) => {setSelectedCategory(e.target.value); setCurrentPage(1);}}>
                    <option value="">Todas las categorías</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {error ? (
                    <p>Error: { error.message }</p>
                ) : loading ? (
                    <p>Cargando...</p>
                ) : (
                    currentItems && currentItems.map((ubi) => (
                        <Link to={`/details/${ubi.sku}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div key={ubi.sku} style={styles.card}>
                                <h3>{ubi.name}</h3>
                                <img src={ubi.imageUrl} alt={ubi.name} style={styles.image}/>
                                <p><strong>ID: </strong> { ubi.sku }</p>
                                <p><strong>Tipo: </strong> { ubi.description }</p>
                                <p><strong>Precio: </strong> { ubi.price }</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
            <div>
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => paginate(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </>
    )
}

const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      width: "250px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "100%",
        heidght: "auto",
    },
};

export default Inicio;
