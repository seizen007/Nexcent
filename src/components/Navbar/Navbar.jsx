import React, { useState } from 'react'
import Images from '../../assets/Images'
import Button from '../Button/Button'
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
const Navbar = () => {
    const [ham, setham] = useState(false)
    const click = () => {
        setham(!ham)
    }
    const opacity = ham? '': 'opacity-0 lg:opacity-100 duration-200 lg:duration-0';

    return (
        <div className="navbar font-inter bg-prime-bg">
            <div className="container">
                <div className="nav-wrapper flex justify-between items-center ">
                    <div className="nav-logo py-[30px] ">
                        <picture>
                            <img src={Images.logo} alt="" />
                        </picture>
                    </div>
                    <div className={`nav-menu lg:static bg-green-800/80 backdrop-blur-lg lg:bg-transparent overflow-hidden overflow-y-auto h-full fixed pb-10 lg:pb-0 top-0 left-0  text-center  duration-300 lg:duration-0 ${ham ? 'w-full sm:w-2/4' : 'w-0 lg:w-fit'}`}>
                        
                            <div className={`cross hover:text-4xl lg:hidden flex justify-end pt-3 px-10 text-3xl text-white hover:text-green-400 duration-300 ${opacity}`} onClick={click}>{
                                ham ? <RxCross2/> : <RxCross2/>
                            }</div>
                       

                        <ul className={`flex flex-col lg:flex-row gap-5 xl:gap-[50px] ${opacity}  `}>
                            <li><a href="" className='capitalize text-white lg:text-black drop-shadow-xl hover:text-prime duration-200 ease-in-out'>home</a></li>
                            <li><a href="" className='capitalize text-white lg:text-black drop-shadow-xl hover:text-prime duration-200 ease-in-out'>service</a></li>
                            <li><a href="" className='capitalize text-white lg:text-black drop-shadow-xl hover:text-prime duration-200 ease-in-out'>feature</a></li>
                            <li><a href="" className='capitalize text-white lg:text-black drop-shadow-xl hover:text-prime duration-200 ease-in-out'>product</a></li>
                            <li><a href="" className='capitalize text-white lg:text-black drop-shadow-xl hover:text-prime duration-200 ease-in-out'>testimonial</a></li>
                            <li><a href="" className='uppercase text-white lg:text-black drop-shadow-xl hover:text-prime duration-200 ease-in-out'>faq</a></li>
                        </ul>
                        <div className={`lg:hidden login-sign flex  gap-[34px] justify-center lg:justify-normal pt-10 lg:pt-0 ${opacity}`}>
                            <div className="login-wrapper">
                                <a href="" className=' text-white hover:text-prime text-sm capitalize '>login</a>
                            </div>
                            <div className="signup-wrapper">
                                <Button href={'#'} className={'py-[10px] px-[20px]'}>sign up</Button>
                            </div>
                        </div>

                    </div>
                    <div className="hidden  login-sign lg:flex  gap-[34px] justify-center lg:justify-normal pt-10 lg:pt-0">
                        <div className="login-wrapper">
                            <a href="" className=' text-prime hover:text-prime/50 text-sm capitalize '>login</a>
                        </div>
                        <div className="signup-wrapper">
                            <Button href={'#'} className={'py-[10px] px-[20px]'}>sign up</Button>
                        </div>
                    </div>
                    <div className="icon cursor-pointer hover:text-3xl hover:text-prime text-2xl duration-200 lg:hidden" onClick={click}>
                        {
                            ham ? <FaBars /> : <FaBars />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar