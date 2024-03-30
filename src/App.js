import "./App.css";
// import Logo from "./assets/Logo";
import Image from "./assets/image.png";
import Form from "./Components/form"
import Navigation from "./Components/Navigation";
// components
import Container from "./Components/Container";
import Card from "./Components/card"
import Services from './Pages/Service'
import Slider from './Components/Slide'
import Footer from './Components/Footer'
import About from './Pages/About'
function App() {
  return (
    <>
        <Navigation/>
        <Container>
        <About/>
        <Form/>
        <Card />
        <Services/>
        <Slider/>
        </Container>
        <Footer/>
    </>
  );
}

export default App;
