import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Factura() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };
    
    return (
        <div>
            <h2>Factura</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.sku}>
                            <td>{product.name}</td>
                            <td>x{product.quantity}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total: {totalPrice}</p>
            <br/>
            <button onClick={handleClearCart}>
            <Link to="/" title='Home'>Finalizar compra</Link>
            </button>
        </div>
    );
}

export default Factura;
