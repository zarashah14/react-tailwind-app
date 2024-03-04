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
           <h1 className='text-5xl font-bold'>Blog Coofee shop</h1>
         </div>

         <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>

           <div className='rounded-xl bg-green-200 p-8'>
              <img src={Cartoon} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl mt-6 font-bold'>Coofee with friends</h1>
               <p className=''>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>
          
           <div className='rounded-xl bg-blue-200 p-8'>
              <img src={Cartoon2} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl text-black mt-6 font-bold'>Coofee with friends</h1>
               <p className='text-black'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>

           <div className='rounded-xl bg-gray-200 p-8'>
              <img src={Cartoon3} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl text-black mt-6 font-bold'>Coofee with friends</h1>
               <p className='text-black'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>

           <div className='rounded-xl bg-pink-200 p-8'>
              <img src={Cartoon4} className='rounded-xl' alt="Description of your image" />
              <h1 className='text-2xl text-black mt-6 font-bold'>Coofee with friends</h1>
               <p className='text-black'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
           </div>
             

         </div>


         <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-10 rounded-xl bg-gray-200 p-8'>
             <div>
             <img src={Cartoon5} className='rounded-xl' alt="Description of your image" />
             </div>

            <div className='flex flex-col justify-center align-middle p-8'> 
                 <h1  className='text-2xl'>Coofee Shop</h1>
                 <p className='text-sm mt-4'>we explore the intricate art of coffee cultivation 
                   and the journey from bean to cup, unraveling the 
                   secrets that contribute to the perfect brew.</p>
            </div>
         </div>
       </section>
    </>
  )
}

export default card
