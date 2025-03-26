import CommonButton from '@/commons/CommonButton'
import React from 'react'

const Discover = () => {
  return (
    <section className='discoverSection'>
      <div className="container">
        <ul className="flex items-center justify-between">
          <li className='discoverInfo'>
            <h2>Discover the best coffee</h2>
            <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <CommonButton buttonName={"Learn More"}/>
          </li>
          <li>
            <img src="/images/beans.png" alt="beans image" />
          </li>
        </ul>
      </div>

      <div className='absolute bottom-[-20%] left-0 z-[-1]'>
        <img src="/images/coffee_blast.png" alt="side coffe blast" />
      </div>
    </section>
  )
}

export default Discover