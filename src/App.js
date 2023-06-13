import './App.scss';
import Footer from './components/footer';
import Home from './components/home';
import ListProduct from './components/listProduct';
import NavBar from './components/nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        {/* <Home></Home> */}
        <ListProduct></ListProduct>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
