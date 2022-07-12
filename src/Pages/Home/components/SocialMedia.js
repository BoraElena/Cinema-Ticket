import React from 'react'
import "./SocialMedia.css"
import instagram from './icon/instagram.png';
import facebook from './icon/facebook.png';
import twitter from './icon/twitter.png';
import youtube from './icon/youtube.png'

function SocialMedia() {
  return (
    <div>
      <div className='social-media'>
        <h1 id="left">Follow us</h1>
    <img src={instagram} alt="" style={{width:"45px"}}></img>
 
    <img src={facebook} alt="" style={{width:"45px"}}></img>

    <img src={twitter} alt="" style={{width:"45px"}}></img>
  
    <img src={youtube} alt="" style={{width:"45px"}}></img>
    <h1 id="right">About us</h1>
    </div>
    </div>
  )
}

export default SocialMedia
