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
function App() {
  return (
    <>
        <Navigation/>
      <Container>
      
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:px-12">
          <div>
            {/* <Logo /> */}
            <h1 className="text-3xl font-bold">WELCOME TO BRANKO. COFFEE SHOP</h1>
            <h3 className="text-3xl font-bold pt-10">
              Open
            </h3>
            <p className="text-3xl font-bold ">
              COFFEE SHOP
            </p>
            <p className="text-3xl font-bold ">
              BRANKO!
            </p>
            <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded-xl mt-6 lg:w-40"
             >  
              Follow us
             </button>
          </div>
          <img src={Image} alt="Description of your image" />
        </div>
        <Form/>
        <Card />
        </Container>
        
        <Services/>
        <Slider/>
        <Footer/>
     
      
    </>
  );
}

export default App;
