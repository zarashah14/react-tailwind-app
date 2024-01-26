
import './App.css';
import Logo from './assets/Logo';
import Image from './assets/image'
function App() {
  return (
      <>
      <div className='h-screen items-center bg-blue-50 flex'>
   <div className='flex flex-row mx-auto'>
      <div className='flex flex-col'>
        <div><Logo/></div>
        <h3 className='text-DS-black font-source-sans-pro text-30 pt-10'>Simple</h3>
        <p className='text-DS-black font-source-sans-pro text-3xl font-extrabold '>Design by</p>
        <p className='text-DS-black font-source-sans-pro text-3xl font-extrabold '>Zara Shah</p>
      </div>
        <div className='flex flex-row'><Image/></div>
        </div>
        </div>
      </>
  );
}

export default App;
