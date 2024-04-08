import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Detail() {
    const { sku } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://eock031zmoorept.m.pipedream.net/v1/products`)
            .then(response => response.json())
            .then(data => {
                const productData = data.find(item => item.sku.toString() === sku);
                setProduct(productData);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [sku]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return <p>No hay datos disponibles</p>;

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity: 1 } });
        alert('Se ha agregado un producto al carrito');

    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p><strong>Sku: </strong> {product.sku}</p>
            <p><strong>Tipo: </strong> {product.description}</p>
            {product.imageUrl && <img src= {product.imageUrl} alt= {product.name}/>}
            <p><strong>Precio: </strong> {product.price}</p>
            <p><strong>Detalle:</strong> {product.description}</p>

            <button onClick={() => addToCart(product)} >Agregar al carrito</button>
        </div>
    );
}

export default Detail;
