import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {

    const [list, setList] = useState(JSON.parse(localStorage.getItem('cart')));
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum = sum + (list[i].quantity * list[i].price);
        }
        setSubtotal(sum);
    }, [])

    const updateQuantity = (item, type) => {
        let clone = list;
        let sum = 0;

        for (let i = 0; i < clone.length; i++) {
            if (item.id === clone[i].id) {
                if (type === 'cong') {
                    clone[i].quantity = item.quantity + 1;
                    for (let i = 0; i < list.length; i++) {
                        sum = sum + (list[i].quantity * list[i].price);
                    }
                    setSubtotal(sum);
                }
                else if (type === 'tru') {
                    clone[i].quantity = item.quantity - 1;

                    for (let i = 0; i < list.length; i++) {
                        sum = sum + (list[i].quantity * list[i].price);
                    }
                    setSubtotal(sum);
                }
            }
        }
        setList([...clone]);
        localStorage.setItem('cart', JSON.stringify(list));
    }

    const deleteItem = (item) => {
        let clone = list;
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            clone = clone.filter(index => index.id !== item.id);
            sum = sum + (list[i].quantity * list[i].price);
        }
        setSubtotal(sum);
        setList([...clone]);
        localStorage.setItem('cart', JSON.stringify([...clone]));
    }

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
                                                <button className="update-quantity" onClick={item.quantity < 10 ? () => { updateQuantity(item, 'cong') } : () => { }}>+</button>
                                                <input className="quantity" type="text" readOnly value={item.quantity}></input>
                                                <button hidden={item.quantity == 1 ? true : false} className="update-quantity" onClick={item.quantity > 1 ? () => { updateQuantity(item, 'tru') } : () => { }}>-</button>
                                                <button hidden={item.quantity > 1 ? true : false} className="delete" onClick={() => deleteItem(item)}>x</button>
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
                                        <hr />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="product-img"></td>
                                    <td className="product-name"></td>
                                    <td className="product-price"></td>
                                    <td></td>
                                    <td className="product-quantity">
                                        <Button className="btn btn-danger btn-buy">Buy</Button>
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