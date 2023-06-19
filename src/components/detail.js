import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listData } from "../store/data";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Card from 'react-bootstrap/Card';

const Detail = (props) => {

    const id = useParams().id;
    const add = props.add;
    const [item, setItem] = useState({});
    const [image, setImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    let mynew = {};
    let main = {};

    useEffect(() => {

        for (let i = 0; i < listData.length; i++) {
            if (id == listData[i].id) {
                let clone = listData[i];
                setItem(clone);
            }
        }
    }, [id])

    // Hover main image
    setTimeout(() => {
        mynew = document.getElementsByClassName('main-image')[0];
        main = document.getElementById('main');

        mynew.addEventListener("mousemove", onZoom);
        mynew.addEventListener("mouseover", onZoom);
        mynew.addEventListener("mouseleave", offZoom);

        function onZoom(e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            main.style.transformOrigin = `${x}px ${y}px`;
            main.style.transform = "scale(2)";
        }

        function offZoom(e) {
            main.style.transformOrigin = `center center`;
            main.style.transform = "scale(1)";
        }
    }, 1000)

    console.log(item);
    return (
        <div className="content">
            <Container className="product-detail">
                <br />
                {item &&
                    <>
                        <p className="product-name-small">{item.name}</p>

                        <div className="row mb-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 image">
                                {item.images && item.images.length > 0 &&
                                    <>
                                        <div className="main-image mb-2">
                                            <img id="main" src={require(`../assets/images/${item.images[image].name}`)} alt="Loading image..." />
                                        </div>
                                        <div className="list-image">
                                            <div className="row">
                                                {item.images.map((item, index) => {
                                                    return (
                                                        <div key={index} className="col-4">
                                                            <img onClick={() => { setImage(index) }} src={require(`../assets/images/${item.name}`)} alt="Loading image..." />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12 col-12 detail">
                                <p className="product-name-big">{item.name}</p>
                                <hr />
                                <div className="information">
                                    <p><strong>- Brand:</strong> {item.brand}</p>
                                    <p><strong>- Price:</strong> ${item.price}</p>
                                    <p><strong>- Detail:</strong> {item.detail}</p>
                                    <div className="quantity">
                                        <strong>- Quantity: </strong>
                                        <button className="update-quantity" onClick={quantity < 10 ? () => { setQuantity(quantity + 1) } : () => { }}>+</button>
                                        <input className="quantity" type="text" readOnly value={quantity}></input>
                                        <button className="update-quantity" onClick={quantity > 1 ? () => { setQuantity(quantity - 1) } : () => { }}>-</button>
                                    </div>
                                    <br />
                                    <button className="btn btn-danger add-to-cart" onClick={() => { add(item, quantity) }}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </>

                }
                {
                    !item &&
                    <p>Loading data...</p>
                }
                <p className="other">Other products</p>
                <hr />
                <div className="recomend">
                    <div className="row">
                        <div className="col-sm-4 col-12 recomend-item mb-2">
                            <Card>
                                <Card.Body className="cardBody">
                                    <div className="row">
                                        <div className="col-lg-6 col-12 img-item">
                                            <img src={require(`../assets/images/${listData[5].images[0].name}`)} alt="Loading image..."></img>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <NavLink to={`/detail/${listData[5].id}`}><strong>{listData[5].name}</strong></NavLink>
                                            <p>Brand: {listData[5].brand}</p>
                                            <p>Price: ${listData[5].price}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-danger addToCart" onClick={() => { add(listData[5], 1) }}>Add to cart</button>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className="col-sm-4 col-12 recomend-item mb-2">
                            <Card>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-lg-6 col-12 img-item">
                                            <img src={require(`../assets/images/${listData[3].images[0].name}`)} alt="Loading image..."></img>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <NavLink to={`/detail/${listData[3].id}`}><strong>{listData[3].name}</strong></NavLink>
                                            <p>Brand: {listData[3].brand}</p>
                                            <p>Price: {listData[3].price} $</p>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-danger addToCart" onClick={() => { add(listData[3], 1) }}>Add to cart</button>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className="col-sm-4 col-12 recomend-item mb-2">
                            <Card>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-lg-6 col-12 img-item">
                                            <img src={require(`../assets/images/${listData[6].images[0].name}`)} alt="Loading image..."></img>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <NavLink to={`/detail/${listData[6].id}`}><strong>{listData[6].name}</strong></NavLink>
                                            <p>Brand: {listData[6].brand}</p>
                                            <p>Price: {listData[6].price} $</p>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-danger addToCart" onClick={() => { add(listData[6], 1) }}>Add to cart</button>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container >
        </div>
    )
}

export default Detail;