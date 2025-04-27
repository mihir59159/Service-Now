import React from 'react'
import HowWorks from './Sections/HowWorks'
import ImagePart from './Sections/ImagePart'
import Rating from './Sections/Rating'
import ServiceShow from './Sections/ServiceShow'

const Section = () => {
  return (
    <div className='bg-white p-5'>
      <ImagePart/>
      <ServiceShow/>
      <HowWorks/>
      <Rating/>
    </div>
  )
}

export default Section