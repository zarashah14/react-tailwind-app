import React from 'react'
import Image1 from '../assets/Screenshot_2.jpg'
function Slide() {
  return (
    <section id="portfolio" className=''>
       <div  className='mb-10'>
        <h1 className='text-3xl font-bold mt-6 ml-4'>Coffee Types Avaliable</h1>
       </div>

       <div className='grid lg:grid-cols-2 grid-cols-1 bg-green-200 rounded-xl p-8'>
           <div id="webdiscription" className='flex flex-col justify-center align-middle md:p-8 p-4'>
              <h1 className='text-2xl'>My Coffee shop products</h1>
               <p className='text-sm mt-2'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
                 <ul className='mt-2'>
                  <li>Black Coffee</li>
                  <li>white Coffee</li>
                  <li>Milki Coffee</li>
                  <li>Cold Coffee</li>
                 </ul>
                 <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded-xl mt-6 w-40"
            >  
              Explore us
            </button>
           </div>
              <div className='websiteImage'>
              <img src={Image1} alt="my image" className='rounded-xl'/>
              </div>
       </div>
    </section>
  )
}

export default Slide
