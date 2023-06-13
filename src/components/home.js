import { listData, listSilde } from "../store/data";
import '../sass/home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

const Home = () => {
    // let image = require(`../assets/images/${listData[0].images[0].name}`)
    console.log(listData);
    return (
        <div className="home-content">
            <div className="slide">
                <Carousel>
                    {listSilde.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={require(`../assets/images/${item.name}`)}
                                    alt="Slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
            <br />
            <div className="row mb-3">
                <div className="col-6">
                    <p className="new">New Products</p>
                </div>
                <div className="col-6">
                    <NavLink to="/products">
                        <button className="btn btn-primary more">More</button>
                    </NavLink>
                </div>
            </div>

            <div className="recomend">
                <div className="row">
                    <div className="col-sm-4 col-12 recomend-item mb-2">
                        <Card>
                            <Card.Body className="cardBody">
                                <div className="row">
                                    <div className="col-lg-6 col-12 img-item">
                                        <img src={require(`../assets/images/${listData[0].images[0].name}`)}></img>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p><strong>{listData[0].name}</strong></p>
                                        <p>Brand: {listData[0].brand}</p>
                                        <p>Price: ${listData[0].price}</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-danger addToCart">Add to cart</button>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="col-sm-4 col-12 recomend-item mb-2">
                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-6 col-12 img-item">
                                        <img src={require(`../assets/images/${listData[3].images[0].name}`)}></img>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p><strong>{listData[3].name}</strong></p>
                                        <p>Brand: {listData[3].brand}</p>
                                        <p>Price: {listData[3].price} $</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-danger addToCart">Add to cart</button>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="col-sm-4 col-12 recomend-item mb-2">
                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-6 col-12 img-item">
                                        <img src={require(`../assets/images/${listData[6].images[0].name}`)}></img>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p><strong>{listData[6].name}</strong></p>
                                        <p>Brand: {listData[6].brand}</p>
                                        <p>Price: {listData[6].price} $</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-danger addToCart">Add to cart</button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;