import React from 'react'
import Titles from './Titles'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import {useNavigate} from 'react-router-dom'
const FeaturedSection = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <Titles title="Featured Cars" subTitle="Explore Our Premium Collection of Premium vehicles available for your next adventure." />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
        {
            dummyCarData.slice(0,3).map((car)=>(
                <div key={car.id}>
                    <CarCard car={car}/>
                </div>
            ))
        }
      </div>
      <button onClick={()=>{ 
        navigate('/cars');scrollTo(0,0);
      }} className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor 
      hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
        Explore All Cars <img src={assets.arrow_icon} alt='arrow' /> 
      </button>
    </div>
  )
}

export default FeaturedSection
