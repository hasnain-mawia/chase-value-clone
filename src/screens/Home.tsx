import React from 'react'
import { Slider } from '../components/Slider'
import { CustomerReview } from '../components/Customer-reviews'

function Home() {
  return (
    <>
    <Slider/>
    <div className='max-w-[1550px] mx-auto'>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-5'>
        <div><img src={require('../assets/images/banner-1.jpg')} alt="" /></div>
        <div><img src={require('../assets/images/banner-2.jpg')} alt="" /></div>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-5'>
        <div>
            <img src={require('../assets/images/banner-3.jpg')} alt="" />
        </div>
        <div>
            <img src={require('../assets/images/banner-4.jpg')} alt="" />
        </div>
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-5'>
        <div>
            <img src={require('../assets/images/banner-5.jpg')} alt="" />
        </div>
        <div>
            <img src={require('../assets/images/banner-6.jpg')} alt="" />
        </div>
     </div>

                {/* --------------------- Top Categories [Start] -------------------------- */}

        <h3 className='text-center py-5 text-[30px] font-semibold text-[gray]'>Top Categories</h3>
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 my-3'>
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-1.jpg')} alt="" />
          <p className='text-center mt-[10px] font-medium'>Men's Watches</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-2.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Fragnances</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-3.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Jewellery</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-4.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Crokery</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-5.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Hair Color</p>
          </div>  
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 my-3'>
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-6.jpg')} alt="" />
          <p className='text-center mt-[10px] font-medium'>Mobile Accesories</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-7.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Kitchen Applicances</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-8.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Healthy Hygiene</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-9.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Kids Toys</p>
          </div>  
          <div><img className='p-10 bg-[#f7f7f7] rounded-[300px] hover:shadow-2xl duration-150' src={require('../assets/images/cat-10.jpg')} alt="" />
           <p className='text-center mt-[10px] font-medium'>Packages and Bundles</p>
          </div>  
        </div> 



                {/* --------------------- Top Categories [End] -------------------------- */}
        <div>
        <h3 className='text-center py-5 text-[30px] font-semibold text-[gray]'>Customers Reviews</h3>
        <CustomerReview/>




        </div>

    </div>
    </>
  )
}

export default Home
