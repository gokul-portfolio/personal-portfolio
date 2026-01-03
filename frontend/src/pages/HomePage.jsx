import React from 'react'

import Services from "../components/home/Services"
import TestMarque from '../components/common/TestMarque'
const HomePage = () => {
  return (
    <div className='Page-wrap'>

      {/* services section */}
      <Services />

      {/* text marque */}
      <TestMarque />

    </div>
  )
}

export default HomePage
