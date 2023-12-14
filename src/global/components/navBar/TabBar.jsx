import React, { useState } from 'react'
import "./NavBar.Scss";
import { Tab } from './navBarStyle';
const TabBar = () => {
 const  tempData=['Wallaper','3D Renderes','Travel','Nature'];
 const [isSelected,setIsSelected] = useState(Editorial)             //state
  return (
    <div className='tabBarContainer'>
    <Tab onClick ={()=>setIsSelected("Editorial")}isSelected={isSelected.toLowerCase().match("Editorial".toLowerCase)}>Editorial</Tab>
    <Tab onClick ={()=>setIsSelected("Following")}isSelected={isSelected.toLowerCase().match("Following".toLowerCase)}>Follwing</Tab>
    <hr/>                        {/*<hr> tag is a horizontal rule that is used to separate content in an HTML document. It creates a horizontal line or divider. */}
    {tempData.map((item, index) => {  // Used arrow function syntax for the map callback. map ik string ki array dy arrey ho round brackets means return by default()
     return <Tab 
     key={index} //best practice agr map use krty h n uss ki ander wali cheezo ko index dey do taa ky virtual dom ussy definte kr sakey
     onClick ={()=>setIsSelected(item)}
     isSelected={isSelected.toLowerCase().match(item.toLowerCase)}>{Item}</Tab>              // curly braces lgaye y yh ik var h iss ko print nhi krna iss ki value ko krna
  
    })}                         
    </div>
  );
};
export default TabBar;

