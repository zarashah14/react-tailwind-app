import "./App.css";
import Logo from "./assets/Logo";
import Image from "./assets/image.png";

// components
import Container from "./Components/Container";
function App() {
  return (
    <>
      {/* <div className='felx '>
      <div className='flex flex-row mx-auto'>
      <div className='flex flex-col'>
        <div className='mt-8'><Logo/></div>
        <h3 className='text-DS-black font-source-sans-pro text-30 pt-10'>Simple</h3>
        <p className='text-DS-Black font-source-sans-pro text-3xl font-extrabold '>Design by</p>
        <p className='text-DS-black font-source-sans-pro text-3xl font-extrabold '>Zara Shah</p>
        <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded mt-6">
           Follow US
        </button>

      </div>
        </div>
        <div className='flex flex-row'><Image/></div>
        </div> */}
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:px-12">
          <div>
            <Logo />
            <h3 className="text-DS-black font-source-sans-pro text-30 pt-10">
              Simple
            </h3>
            <p className="text-DS-Black font-source-sans-pro text-3xl font-extrabold ">
              Design by
            </p>
            <p className="text-DS-black font-source-sans-pro text-3xl font-extrabold ">
              Zara Shah
            </p>
            <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded mt-6"
            >
              Follow US
            </button>
          </div>
          <Image  />
        </div>
      </Container>
    </>
  );
}

export default App;
