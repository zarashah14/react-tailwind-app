import React from 'react'
import Cup from '../assets/Cup'
function Service() {
  return (
    <>
          <section className='p-10'>
            <div className='bg-blue-300 px-6 py-14 rounded-xl'>
          <div className='mb-10'>
           <h1 className='text-4xl font-semibold'>Services</h1>
         </div>
      
         <div id='servicesMainGrid' className='grid md:grid-cols-2 gap-5'>
          
           <div id='firstService' className='grid grid-cols-12 bg-white rounded-xl'>
             <div id='icon' className='bg-blue-600 col-span-2 rounded-l-xl flex justify-center place-items-center'>
                <Cup className='h-10 w-10 '/>
            {/* <i class="fa fa-coffee" aria-hidden="true"></i> */}
            </div>
            <div id='ServiceDiscription' className='px-3 py-5 col-span-10'>
                <h1 className='2xl'>Coffee Cup</h1>
                <p className='text-sm mt-3'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
            </div>
           </div>
            

           <div id='SecondService' className='grid grid-cols-12 bg-white rounded-xl'>
             <div id='icon' className='bg-blue-600 col-span-2 rounded-l-xl flex justify-center place-items-center'>
                <Cup className='h-10 w-10 '/>
            {/* <i class="fa fa-coffee" aria-hidden="true"></i> */}
            </div>
            <div id='ServiceDiscription' className='px-3 py-5 col-span-10'>
                <h1 className='2xl'>Coffee Cup</h1>
                <p className='text-sm mt-3'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
            </div>
           </div>
            
           <div id='ThirdService' className='grid grid-cols-12 bg-white rounded-xl'>
             <div id='icon' className='bg-blue-600 col-span-2 rounded-l-xl flex justify-center place-items-center'>
                <Cup className='h-10 w-10 '/>
            {/* <i class="fa fa-coffee" aria-hidden="true"></i> */}
            </div>
            <div id='ServiceDiscription' className='px-3 py-5 col-span-10'>
                <h1 className='2xl'>Coffee Cup</h1>
                <p className='text-sm mt-3'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
            </div>
           </div>

           <div id='FourthService' className='grid grid-cols-12 bg-white rounded-xl'>
             <div id='icon' className='bg-blue-600 col-span-2 rounded-l-xl flex justify-center place-items-center'>
                <Cup className='h-10 w-10 '/>
            {/* <i class="fa fa-coffee" aria-hidden="true"></i> */}
            </div>
            <div id='ServiceDiscription' className='px-3 py-5 col-span-10'>
                <h1 className='2xl'>Coffee Cup</h1>
                <p className='text-sm mt-3'>Savoring Every Sip is not just a blog;
                 it's a celebration of the beverage that brings people together,
                 stimulates creativity, and provides comfort in every sip.</p>
            </div>
           </div>

         </div>

         </div>
       </section>
    
    
    </>
  )
}

export default Service
