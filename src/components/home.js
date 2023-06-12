import { listData, listSilde } from "../store/data";
import '../sass/home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    // let image = require(`../assets/images/${listData[0].images[0].name}`)
    console.log(listData);
    return (
        <>
            <div className="slide">
                <Carousel>
                    {listSilde.map(item => {
                        return (
                            <Carousel.Item>
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
            <div className="row">
                <div className="col-6">
                    <h2>New products</h2>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary more">More</button>
                </div>
            </div>

            <div className="recomend">
                <div className="row">
                    <div className="col-4 recomend-item">
                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-6 img-item">
                                        <img src={require(`../assets/images/${listData[0].images[0].name}`)}></img>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>{listData[0].name}</strong></p>
                                        <p>Brand: {listData[0].brand}</p>
                                        <p>Price: {listData[0].price} $</p>
                                        <button className="btn btn-danger">Add to cart</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-4 recomend-item">
                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-6 img-item">
                                        <img src={require(`../assets/images/${listData[3].images[0].name}`)}></img>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>{listData[3].name}</strong></p>
                                        <p>Brand: {listData[3].brand}</p>
                                        <p>Price: {listData[3].price} $</p>
                                        <button className="btn btn-danger">Add to cart</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-4 recomend-item">
                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-6 img-item">
                                        <img src={require(`../assets/images/${listData[6].images[0].name}`)}></img>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>{listData[6].name}</strong></p>
                                        <p>Brand: {listData[6].brand}</p>
                                        <p>Price: {listData[6].price} $</p>
                                        <button className="btn btn-danger">Add to cart</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;