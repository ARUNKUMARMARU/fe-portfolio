import React, { useEffect, useRef } from 'react'
import "./Skills.css";
import {HomeFilled, PhoneFilled, GithubFilled, MailOutlined, LinkedinFilled} from '@ant-design/icons'
import background_image from '../../assets/project-bg.jpg'
import javascript_logo from '../../assets/JavaScript-logo.jpg'
import react_logo from '../../assets/React-icon.jpg'
import html_logo from '../../assets/HTML5_logo.jpg'
import CSS3_logo from '../../assets/CSS3_logo.jpg'
import node_js_logo from '../../assets/Node.js_logo.jpg'
import expressjs from '../../assets/Expressjs.jpg'
import mongodb from '../../assets/mongodb.jpg'
import mysql from '../../assets/mysql.jpg'
import bootstrap from '../../assets/bootstrap.jpg'
import antd from '../../assets/antd.jpg'
import github from '../../assets/github.jpg'


function Skills() {

  return (
    <div>
        <div className='image-container2'>
        <img src={background_image} alt="background image" />
        {/* "https://img.freepik.com/free-vector/creative-geometric-design-space_53876-89781.jpg?size=626&ext=jpg&ga=GA1.1.284963970.1710327628&semt=ais" */}
       <div className='img-text2'>

       <div>
       <h1>Skills</h1>
       <p>Skills I Know</p>
       </div>      
 
       </div>
       
    </div>
  
    
   
    <div className='img-logo1'> 
   <marquee behavior="" loop="" direction="left" scrollamount="12"
   className='img-logo'>         
           

          <div className='image-wrapper'>
          <img src={javascript_logo} alt="JAVASCRIPT"
           style={{padding:'32px 16px', margin:'19px',width:'150px'}}/>
         <p>JAVASCRIPT</p>
          </div>
          {/* "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433" */}

          <div className='image-wrapper'>
           <img src={react_logo} alt="REACT" 
            style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>REACT</p>
          </div>
          {/* "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" */}
          <div className='image-wrapper'>
          <img src={html_logo} alt="HTML" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
           <p>HTML</p>
          </div>
       {/* https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png */}
          <div className='image-wrapper'>
           <img src={CSS3_logo} alt="CSS"  style={{padding:'32px 16px', margin:'19px',width:'115px'}}
           />
           <p>CSS</p>
          </div>
{/* https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png */}
          <div className='image-wrapper'>
           <img src={node_js_logo} alt="NODE JS" 
           style={{padding:'32px 16px', margin:'19px',width:'200px'}}/>  
           <p>NODE JS</p>
          </div>
          {/* https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png */}
          <div className='image-wrapper'>
   
           <img src={expressjs} alt="EXPRESS JS" 
           style={{padding:'32px 16px', margin:'19px', width:'200px', paddingTop:'50px',
           backgroundColor:'white', borderRadius:'50px'}}/>  
           <p>EXPRESS JS</p>
          </div>
{/* https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png */}
          <div className='image-wrapper'>
           <img src={mongodb} alt="MONGODB" 
             style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>MONGODB</p>
          </div> 
{/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5d9a1dlKN6uIr9yawVly55Q2YJw9w9ck2RQOAIHSk8hNPMBWrpxKHkF1Y0CsPdS9Tvs&usqp=CAU */}
          <div className='image-wrapper'>
           <img src={mysql} alt="MySQL" 
             style={{padding:'32px 16px', margin:'19px', width:'200px'}}/>
            <p>MySQL</p>
          </div> 
{/* https://www.mysql.com/common/logos/logo-mysql-170x115.png */}
           <div className='image-wrapper'>
           <img src={bootstrap} alt="BOOTSTRAP"  
            style={{padding:'32px 16px', margin:'19px', width:'180px'}}/>
            <p>BOOTSTRAP</p>
          </div>
{/* https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg */}


           <div className='image-wrapper'>
           <img src={antd} alt="ANT DESIGN"  
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>ANTDESIGN</p>
          </div>
{/* "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" */}
          <div className='image-wrapper'>
           <img src={github} alt="GITHUB" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>GITHUB</p>
          </div>
{/* "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" */}


<div className='image-wrapper'>
          <img src={javascript_logo} alt="JAVASCRIPT"
           style={{padding:'32px 16px', margin:'19px',width:'150px'}}/>
         <p>JAVASCRIPT</p>
          </div>
          {/* "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433" */}

          <div className='image-wrapper'>
           <img src={react_logo} alt="REACT" 
            style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>REACT</p>
          </div>
          {/* "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" */}
          <div className='image-wrapper'>
          <img src={html_logo} alt="HTML" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
           <p>HTML</p>
          </div>
       {/* https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png */}
          <div className='image-wrapper'>
           <img src={CSS3_logo} alt="CSS"  style={{padding:'32px 16px', margin:'19px',width:'115px'}}
           />
           <p>CSS</p>
          </div>
{/* https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png */}
          <div className='image-wrapper'>
           <img src={node_js_logo} alt="NODE JS" 
           style={{padding:'32px 16px', margin:'19px',width:'200px'}}/>  
           <p>NODE JS</p>
          </div>
          {/* https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png */}
          <div className='image-wrapper'>
   
           <img src={expressjs} alt="EXPRESS JS" 
           style={{padding:'32px 16px', margin:'19px', width:'200px', paddingTop:'50px',
           backgroundColor:'white', borderRadius:'50px'}}/>  
           <p>EXPRESS JS</p>
          </div>
{/* https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png */}
          <div className='image-wrapper'>
           <img src={mongodb} alt="MONGODB" 
             style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>
            <p>MONGODB</p>
          </div> 
{/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5d9a1dlKN6uIr9yawVly55Q2YJw9w9ck2RQOAIHSk8hNPMBWrpxKHkF1Y0CsPdS9Tvs&usqp=CAU */}
          <div className='image-wrapper'>
           <img src={mysql} alt="MySQL" 
             style={{padding:'32px 16px', margin:'19px', width:'200px'}}/>
            <p>MySQL</p>
          </div> 
{/* https://www.mysql.com/common/logos/logo-mysql-170x115.png */}
           <div className='image-wrapper'>
           <img src={bootstrap} alt="BOOTSTRAP"  
            style={{padding:'32px 16px', margin:'19px', width:'180px'}}/>
            <p>BOOTSTRAP</p>
          </div>
{/* https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg */}


           <div className='image-wrapper'>
           <img src={antd} alt="ANT DESIGN"  
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>ANTDESIGN</p>
          </div>
{/* "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" */}
          <div className='image-wrapper'>
           <img src={github} alt="GITHUB" 
           style={{padding:'32px 16px', margin:'19px', width:'150px'}}/>  
           <p>GITHUB</p>
          </div>
          </marquee>

   </div>
   
  
   
   
    <div className='footer'>
       <footer className='footer2'>
       
   <div>
   <HomeFilled />  
 
 <p>7/175, KeelKadhavuKarai,
 Keregounden Palayam(po),
 Annur, Coimbatore - 641 697 <br />
 Tamil Nadu,
 India</p>
   </div>

 <div style={{position:'absolute', top:'670px', left:'500px'}}>
 <PhoneFilled />
<p> +91 7397658644</p>
 </div>
 <div style={{position:'absolute', top:'780px', left:'500px'}}>
 <MailOutlined />
<p> arunsmart1020@gmail.com</p>
 </div>

 <div style={{position:'absolute', top:'670px', left:'900px'}}>
 <a href="https://github.com/ARUNKUMARMARU"
 target='_blank'
 className='icon-link'><GithubFilled /></a> &nbsp; &nbsp; &nbsp;
 <a href="https://www.linkedin.com/in/arunkumar-m-cbe/"
 target='_blank' className='icon-link'><LinkedinFilled /></a>

 </div>
   
       </footer>
    </div>

  
   
    </div>
    
  )
}

export default Skills