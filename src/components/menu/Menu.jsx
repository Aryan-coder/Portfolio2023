import React, { createElement, useEffect, useRef, useState } from 'react'
import {BiCodeAlt} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineLaptop,AiOutlineHome, AiOutlineMessage} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import './Menu.scss'



export default function Menu() {

    const handleScroll=(page)=>{
        if(page == 'home') document.getElementById(page).scrollIntoView({ behavior: 'smooth' });
        else
        document.getElementById(page).scrollIntoView({ behavior: 'smooth' });
    }

  return (<div className='menu-area'>
    <div className='menu'>
        <div className='option' onClick={()=>handleScroll('home')} >
            <i><AiOutlineHome/></i> 
            <span>Home</span>
        </div>
        <div className='line' ></div>
        <div className='option' onClick={()=>handleScroll('about')}  >
            <i><IoMdContact/></i>
            <span>About</span>
        </div>
        <div className='line' ></div>
        <div className='option' onClick={()=>handleScroll('skill')}  >
            <i><BiCodeAlt/></i>
            <span>Skills</span>
        </div>
        <div className='line' ></div>
        <div className='option' onClick={()=>handleScroll('project')}  >
            <i><AiOutlineLaptop/></i>
            <span>Projects</span>
        </div>
        <div className='line' ></div>
        <div className='option' onClick={()=>handleScroll('experience')}  >
            <i><CgWorkAlt/></i>
            <span>Experience</span>
        </div>
        <div className='line' ></div>
        <div className='option' onClick={()=>handleScroll('contact')}  >
            <i><AiOutlineMessage/></i>
            <span>Contact</span>
        </div>
    </div>
  </div>)
}
