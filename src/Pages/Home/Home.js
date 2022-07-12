import React from 'react';
import left from './images/left.jpg';
import Table from './components/Table';
import SocialMedia from './components/SocialMedia';




function Home() {
 
  return (
  <div className='header'style={{ backgroundImage: `url(${left})`,height:'54.9rem', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}>
    <div className='main'>

      <Table/>
      <SocialMedia/>
    </div>
  </div>

  )
}

export default Home
