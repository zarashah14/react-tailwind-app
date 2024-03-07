import React from 'react';
import Logo from '../assets/Logo';
import Vector1 from '../assets/Vector1';
import Vector2 from '../assets/Vector2';
import Vector3 from '../assets/Vector3';
import Vector4 from '../assets/Vector4';
import Icon8 from '../assets/icons8.png';

function Navigation() {
  const toggleMenu = () => {
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    if (mobileMenuContent.getAttribute('class') === 'hidden') {
      mobileMenuContent.setAttribute('class', 'block');
    } else {
      mobileMenuContent.setAttribute('class', 'hidden');
    }
  };

  return (
    <div className='bg-gray-900'>
        
           <nav>
             <div className='hidden md:block'>
             <div className='flex justify-between items-center h-24 p-4'>
                  <div>
                  <ul className='list-none flex lg:gap-5 md:gap-3 '>
                     <li className=' text-white'>Home</li>
                     <li className=' text-white'>About</li>
                     <li className='  text-white'>Services</li>
                     <li className=' text-white'>Register</li>
                     <li className=' text-white'>Contact us</li>
                  </ul>
                  </div>
    
    
                  <div>
                      <Logo />
                  </div>
    
    
                  <div>
                  <ul className='list-none flex lg:gap-5 md:gap-3 '>
                     <li className=' text-white'><Vector1/></li>
                     <li className=' text-white'><Vector2/></li>
                     <li className=' text-white'><Vector3/></li>
                     <li className=' text-white'><Vector4/></li>
                  </ul>
                  </div>
    
             </div>
             </div>
    
             <div className='block md:hidden'>
                 <div className='flex items-center justify-between h-24 p-4'>
                     <div>
                         <Logo/>
                     </div>
    
                     <div>
                         <button onClick={toggleMenu}>
                            <img src={Icon8} alt="My image"/></button>
                     </div>
                 </div>
    
                 <div className='hidden' id='mobileMenuContent'>
    
                     <div>
                     <ul className='list-none flex flex-col ml-4 space-x-2'>
                     <li className='text-white p-3'>Home</li>
                     <li className='text-white p-3'>About</li>
                     <li className='text-white p-3'>Services</li>
                     <li className='text-white p-3'>Register</li>
                     <li className='text-white p-3'>Contact us</li>
                  </ul>
                     </div>
    
                     <div>
                     <ul className='list-none flex ml-4 space-x-2'>
                     <li className='p-3'><Vector1/></li>
                     <li className='p-3'><Vector2/></li>
                     <li className='p-3'><Vector3/></li>
                     <li className='p-3'><Vector4/></li>
                   </ul>
                    </div>
                    
                 </div>
          </div>
    
          </nav>
          
          
        </div>
  );
}

export default Navigation;

