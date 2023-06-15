import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {

    const [list, setList] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const clone = JSON.parse(localStorage.getItem('cart'));
        let sum = 0;
        for (let i = 0; i < clone.length; i++) {
            sum = sum + (clone[i].quantity * clone[i].price);
        }
        setSubtotal(sum);
        setList(clone);
    }, [])

    return (
        <>
            <Container className="cart">
                {/* Header */}
                <div className="row">
                    <div className="col-4 name-page">
                        <h2>Cart</h2>
                    </div>
                    <div className="col-8 back">
                        <NavLink to="/products">Back to shopping <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg></NavLink>
                    </div>
                </div>
                <hr />

                {/* List item */}
                {list.length > 0 &&
                    <div className="list-product">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="product-img">Product</td>
                                    <td className="product-name"></td>
                                    <td className="product-price">Price</td>
                                    <td className="product-quantity">Quantity</td>
                                    <td className="product-total">Total</td>
                                </tr>
                                {list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="product-img item"><img src={require(`../assets/images/${item.image.name}`)} alt="Loading image..." /></td>
                                            <td className="product-name item">{item.name}</td>
                                            <td className="product-price item">${item.price}</td>
                                            <td className="product-quantity item">
                                                <span>+ </span>
                                                <input type="text" readOnly value={item.quantity}></input>
                                                <span> -</span>
                                            </td>
                                            <td className="product-total item">${item.price * item.quantity}</td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td className="product-img"></td>
                                    <td className="product-name"></td>
                                    <td className="product-price"></td>
                                    <td className="product-quantity">Subtotal:</td>
                                    <td className="product-total subtotal">${subtotal}</td>
                                </tr>
                                <tr>
                                    <td className="product-img"></td>
                                    <td className="product-name"></td>
                                    <td className="product-price"></td>
                                    <td colSpan={2} className="product-quantity">
                                        <Button class="btn btn-danger btn-buy">Buy</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                {list.length == 0 &&
                    <p>Your cart is empty</p>
                }
            </Container>
        </>
    )
}

export default Cart;