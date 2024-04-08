import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleIncrease = (product) => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    const handleDecrease = (sku) => {
        dispatch({ type: 'DECREASE_QUANTITY', sku });
    };

    const handleRemove = (sku) => {
        dispatch({ type: 'REMOVE_FROM_CART', sku });
    };

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div>
            <h1>Carrito de compras</h1>
            {cart.map(product => (
                <div key={product.sku}>
                    <h2>{product.name}</h2>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio: {product.price}</p>
                    <button onClick={() => handleIncrease(product)}>+</button>
                    <button onClick={() => handleDecrease(product.sku)}>-</button>
                    <button onClick={() => handleRemove(product.sku)}>Eliminar</button>
                </div>
            ))}
            <p>Total: {totalPrice}</p>
        </div>
    );
}

export default Cart;
