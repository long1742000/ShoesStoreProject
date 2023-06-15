import './App.scss';
import Footer from './components/footer';
import Home from './components/home';
import ListProduct from './components/listProduct';
import NavBar from './components/nav';
import Container from 'react-bootstrap/Container';
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  localStorage.setItem('cart', JSON.stringify([]));

  const checkExist = (id, arr) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) {
          return true;
        }
      }
      return false;
    }
    else {
      return false;
    }
  }

  const addToCart = (item, quantity) => {
    let clone = JSON.parse(localStorage.getItem('cart'));
    let addItem = [];

    if (checkExist(item.id, clone)) {
      for (let i = 0; i < clone.length; i++) {
        if (item.id === clone[i].id) {
          let sum = clone[i].quantity + quantity;
          clone[i].quantity = sum;
        }
      }
      addItem = [...clone];
    }
    else {
      addItem = [...clone, { id: item.id, name: item.name, image: item.images[0], price: item.price, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(addItem));
    console.log(addItem);
    toast.success('+1')
  }

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home add={addToCart} />} />
          <Route path="/products" element={<ListProduct add={addToCart} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
