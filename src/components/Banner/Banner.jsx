import React from 'react'
import Button from '../Button/Button'
import Images from '../../assets/Images'
const Banner = () => {
    return (
        <div className="banner font-inter bg-prime-bg">
            <div className="container">
                <div className="banner-wrapper flex justify-center lg:justify-normal flex-wrap lg:flex-nowrap md:gap-[104px] gap-10 py-[96px]  ">
                    <div className="content-left lg:w-2/3 text-center md:text-start ">
                        <div className="text-wrapper ">
                            <h1 className='md:text-[64px] sm:text-[54px] text-[40px] font-semibold text-sec'>
                                Lessons and insights <span className='text-prime'>from 8 years</span>
                            </h1>
                            <p className='md:text-base text-sm text-sec'>Where to grow your business as a photographer: site or social media?</p>
                        </div>
                        <div className="button pt-[32px]">
                            <Button className={'px-[32px] py-[14px] '}>register</Button>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="banner-img">
                            <picture>
                                <img src={Images.banner} alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner