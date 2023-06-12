import './App.scss';
import Footer from './components/footer';
import Home from './components/home';
import NavBar from './components/nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Home></Home>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
