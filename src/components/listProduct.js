import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { listData } from "../store/data"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ListProduct = () => {

    const [listProduct, setListProduct] = useState([]);
    const [more, setMore] = useState(2);
    const [fil, setFil] = useState("");
    const [filted, setFilted] = useState(false);
    const [keyword, setKeyword] = useState("");

    const getProduct = () => {
        let list = [];
        for (let i = 0; i <= more; i++) {
            list.push(listData[i]);
        }
        setListProduct(list);
    }

    // Filter
    const clickFill = (name) => {
        if (fil === name) {
            setFil("");
        }
        else {
            setFil(name);
        }
    }

    const clickFilter = () => {
        if (fil === "") {
            getProduct();
            setMore(2);
            setFilted(false);
        }
        else {
            setFilted(true);
            let clone = listData.filter(item => item.brand == fil);
            setListProduct(clone);
        }
    }

    //Search
    const typeSearch = (event) => {
        if (!event.target.value) {
            getProduct();
            setFilted(false);
        }
        setKeyword(event.target.value);
    }

    const clickSearch = () => {
        if (keyword === "") {

        }
        else {
            setFilted(true);
            let clone = listData.filter(item => item.name.includes(keyword));
            setListProduct(clone);
        }
    }

    // ComponentDidMount
    useEffect(() => {
        getProduct();
    }, [more])

    return (
        <Container className="list-product">
            <br />
            {/* Search */}
            <div className="row mb-3">

                <div className="col-sm-7 col-12 name-page">
                    <h2>List Product</h2>
                </div>

                <div className="col-sm-5 col-12 search">
                    <input type="text" className="form-control" placeholder="Product name..." onChange={(event) => { typeSearch(event) }} />
                    <div className="icon-search" onClick={() => { clickSearch() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>

            </div>

            <div className="row">
                {/* Filter */}
                <div className="col-sm-3 col-12 filter">
                    <div className="filter-seperate row mb-2">
                        <div className="col-sm-8 col-8">Filter</div>
                        <div className="col-sm-4 col-4">
                            <span hidden={fil !== "" ? false : true} className="btn-filter" onClick={() => { clickFilter() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </span>
                            <span hidden={fil !== "" ? true : false} className="btn-filter" onClick={() => { clickFilter() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-1 filter-item" onClick={() => { clickFill('Nike') }}>
                            <svg hidden={fil == 'Nike' ? false : true} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                            </svg> Nike
                        </div>
                        <div className="col-12 mb-1 filter-item" onClick={() => { clickFill('Adidas') }}>
                            <svg hidden={fil == 'Adidas' ? false : true} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                            </svg> Adidas
                        </div>
                        <div className="col-12 mb-1 filter-item" onClick={() => { clickFill('Vans') }}>
                            <svg hidden={fil == 'Vans' ? false : true} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                            </svg> Vans
                        </div>

                    </div>

                </div>

                {/* List */}
                <div className="col-sm-9 col-12">
                    {/* Product item */}
                    <div className="row">
                        {listProduct.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-12 mb-2 product-item">
                                    <Card>
                                        <Card.Body className="cardBody">
                                            <div className="row">
                                                <div className="col-lg-12 col-12 img-item">
                                                    <img src={require(`../assets/images/${item.images[0].name}`)}></img>
                                                </div>
                                                <div className="col-lg-12 col-12 detail">
                                                    <p><strong>{item.name}</strong></p>
                                                    <p>Brand: {item.brand}</p>
                                                    <p>Price: {item.price} $</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <button className="btn btn-danger addToCart">Add to cart</button>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            )
                        })}

                    </div>

                    {/* More */}
                    <div hidden={(more == 8 || filted == true) ? true : false} className="more" onClick={() => { setMore(more + 3) }}>
                        More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </div>

                </div>

            </div>


        </Container>
    )
}

export default ListProduct;