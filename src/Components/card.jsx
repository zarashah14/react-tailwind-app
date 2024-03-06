import React from 'react'
import Cartoon from '../assets/cartoon.png'
import Cartoon2 from '../assets/cartoon2.png'
import Cartoon3 from '../assets/dg.jpg'
import Cartoon4 from '../assets/cofee.jpg'
import Cartoon5 from '../assets/Screenshot_3.jpg'
function card() {
  return (
    <>
     
       <section className='p-10'>

         <div className='mb-10'>
           <h1 className='text-5xl font-bold'>Blogs</h1>
         </div>

         <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>

           <div className='rounded-xl bg-green-200 md:p-8 p-4'>
              <img src={Cartoon} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl mt-6 font-bold'>Coffee with friends</h1>
               <p className=''>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>
          
           <div className='rounded-xl bg-blue-200 md:p-8 p-4'>
              <img src={Cartoon2} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl text-black mt-6 font-bold'>Coffee with friends</h1>
               <p className='text-black'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>

           <div className='rounded-xl bg-gray-200 md:p-8 p-4'>
              <img src={Cartoon3} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl text-black mt-6 font-bold'>Couple Coffee</h1>
               <p className='text-black'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>

           <div className='rounded-xl bg-pink-200 md:p-8 p-4'>
              <img src={Cartoon4} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl text-black mt-6 font-bold'>Coffee with Partners</h1>
               <p className='text-black'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>
             

         </div>


         <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-10 rounded-xl bg-gray-200 p-8'>
             <div>
             <img src={Cartoon5} className='rounded-xl' alt="Description of your image" />
             </div>

            <div className='flex flex-col justify-center align-middle md:p-8 p-4'> 
                 <h1  className='text-2xl'>Branko Coffee Shop</h1>
                 <p className='text-sm mt-4'>we explore the intricate art of coffee cultivation 
                   and the journey from bean to cup, unraveling the 
                   secrets that contribute to the perfect brew.</p>
              <button
              type="button"
              class="bg-gradient-to-r px-4 from-green-400 to-blue-500 transition hover:-translate-y-2  hover:from-pink-500 hover:to-yellow-500 py-4 rounded-xl mt-6 w-40"
             >  
              My Coffee Shop
             </button>

            </div>
         </div>
       </section>
    </>
  )
}

export default card
