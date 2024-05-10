import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFetch } from "../Components/useFetch";


function Detail() {
    const { sku } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(`https://eock031zmoorept.m.pipedream.net/v1/products`);
    const product = data ? data.find(item => item.sku.toString() === sku) : null;
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        if (product) {
            setSimilarProducts(data.filter(item => item.CategoryName === product.CategoryName && item.sku !== product.sku));
        }
    }, [product, data]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return <p>Cargando Producto...</p>;

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity: 1 } });
        alert('Se ha agregado un producto al carrito');
    };

    return (
        <div className="product-card">
            <div className="product-image">
                {product.imageUrl && <img src= {product.imageUrl} alt= {product.name}/>}
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <p><strong>Sku: </strong> {product.sku}</p>
                <p> {product.description}</p>
                <p><strong>Precio: </strong> {product.price}</p>
                <button onClick={() => addToCart(product)} >Agregar al carrito</button>
            </div>
            <div className="similar-products">
                <h3>Productos similares</h3>
                {similarProducts.map(similarProduct => (
                    <div key={similarProduct.sku} className="product">
                        <h2>{similarProduct.name}</h2>
                        <p>{similarProduct.description}</p>
                        <p><strong>Precio: </strong> {similarProduct.price}</p>
                        <button onClick={() => addToCart(similarProduct)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Detail;
