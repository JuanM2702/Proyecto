import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

    const handleIncrease = (product) => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    const handleDecrease = (sku) => {
        dispatch({ type: 'DECREASE_QUANTITY', sku });
    };

    const handleRemove = (sku) => {
        dispatch({ type: 'REMOVE_FROM_CART', sku });
    };

    const handleConfirmPurchase = () => {
        setPurchaseConfirmed(true);
    };

    const handleNewPurchase = () => {
        dispatch({ type: 'CLEAR_CART' });
        setPurchaseConfirmed(false);
    };

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div>
            <h1>Carrito de compras</h1>
            {cart.map(product => (
                <div key={product.sku}>
                    <h3>{product.sku}</h3>
                    <p>{product.name} x{product.quantity}</p>

                    <p>Precio: {product.price}</p>
                    <button onClick={() => handleIncrease(product)}>+</button>
                    <button onClick={() => handleDecrease(product.sku)}>-</button>
                    <button onClick={() => handleRemove(product.sku)}>Eliminar</button>
                </div>
            ))}
            <p>Total: {totalPrice}</p>
            <Link to="/factura">
                <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
            </Link>
            {purchaseConfirmed ? (
                <div>
                    <h2>Factura</h2>
                    <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            </tr>
                    {cart.map(product => (
                        <div key={product.sku}>
                            <table>

                            <tr>
                                <td>{product.name}</td>
                                <td>x{product.quantity}</td>
                                <td>${product.price}</td>
                            </tr>
                            </table>

                        </div>
                    ))}
                    <p>Total: {totalPrice}</p>
                    <button onClick={handleNewPurchase}>Realizar una nueva compra</button>
                </div>
            ) : null}
        </div>
    );
}

export default Cart;
