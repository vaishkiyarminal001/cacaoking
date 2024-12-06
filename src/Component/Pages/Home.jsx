import React from 'react'
import { Carousels } from './Carousels'
import './Home.css';

export const Home = () => {
  return (
    <div>
      {/* carousels */}
      <Carousels/>

      <div className='carText'>
        <h3>PURVEYORS OF THE FINEST HERBAL MEDICINES</h3>
      </div>
    </div>
  )
}
