import React, { useEffect, useState } from 'react'
import "./ImageCollection.scss";
import { MainContainer } from '../../../../../global/styles/globalStyle';

const ImageCollection = () => {
const [list,setList]=useState([]);
const [page,setPage]=useState(1);
const loaderDiv=useRef(null); 
  useEffect(()=>{
    api
    .get(`search/photos?query=office&page=${page}`)
    .then((res)=>{
      setList([...list,...res.data.results]);  //concat karo gey new array sy purani arrey k sath iss sy new array baney gi
    })
    .then((err)=>{
    console.log(err);
    });
    
  },[page]);
  
  useEffect(()=>{
   if(list.length>0){
     let obs =new IntersectionObserver((entries)=>{
      const entry =entries[0];
      if(entry.Intersecting){
        setPage((prev)=>prev+1); //page set karey ga
      }
    });
    obs.observe(loaderDiv.current);
  } 
  },[list.length]);

  return (
    <MainContainer className='imageCollectionContainer'>
      {list.map(({Links}, index) => (
        <img width={"100px"} key={index} src={Links?.download} alt="" />
      ))}
      <div ref={loaderDiv}>

      </div>
    </MainContainer>
  );
  
  
};

export default ImageCollection