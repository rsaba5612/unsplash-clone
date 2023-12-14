import React, { useState, useEffect } from 'react';
import {MainContainer} from '../../../../global/styles/globalStyle';
import api from 'https://api.unsplash.com';
import "./Hero.scss";

const Hero=()=> {
const [background,setbackground] =useState('');
useEffect(()=>{
  api
  .get(' /photos/random')
  .then((res)=>{
    setbackground(res.data.links.download);
  })
  .catch((err)=>{
  console.log(err);
  });
  
},{});
  return (
  <MainContainer className='heroContainer ' style={{backgroundImage: `url(${background})`,
  }}>
 <div>
  <h1>Unsplash</h1>
<span>
  The internet's source for visuals. 
  <br/> Powered by creators everywhere.
</span>
</div>
</MainContainer>
  );
}

export default Hero