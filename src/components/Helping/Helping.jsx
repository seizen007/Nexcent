import React from 'react'
import Images from '../../assets/Images'

const Helping = () => {
    return (
        <div className="helping bg-prime-bg">
            <div className="container">
                <div className="helping-wrapper font-inter flex flex-wrap justify-between items-center gap-10 lg:gap-0 py-[64px] my-[48px]">
                    <div className="left-content lg:w-1/2 ">
                        <div className="text w-fit  md:w-[408px]">
                            <div className="text-wrapper">
                                <h1 className='md:text-[36px] text-[30px] font-semibold text-sec leading-[44px]'>Helping a local <span className='text-prime'>business reinvent itself</span></h1>
                                <p className=' text-[16px] leading-6 text-sec font-normal'>We reached here with our hard work and dedication</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content lg:w-1/2">
                        <div className="text">
                            <div className="text-wrapper grid lg:grid-cols-2 grid-cols-1  gap-[40px]">
                                {/* item-1 */}
                                <div className="item-1 flex gap-4">
                                <picture>
                                    <img src={Images.help.icon1} alt="" />
                                </picture>
                                <div className="text-wrapper">
                                    <h2 className='text-[28px] text-sec font-semibold'>2,245,341</h2>
                                    <p>Members</p>
                                </div>
                                </div>
                                {/* item-2 */}
                                <div className="item-2 flex gap-4">
                                <picture>
                                    <img src={Images.help.icon2} alt="" />
                                </picture>
                                <div className="text-wrapper">
                                    <h2 className='text-[28px] text-sec font-semibold'>46,328</h2>
                                    <p>Clubs</p>
                                </div>
                                </div>
                                {/* item-3 */}
                                <div className="item-3 flex gap-4">
                                <picture>
                                    <img src={Images.help.icon3} alt="" />
                                </picture>
                                <div className="text-wrapper">
                                    <h2 className='text-[28px] text-sec font-semibold'>828,867</h2>
                                    <p>Event Bookings</p>
                                </div>
                                </div>
                                {/* item-4 */}
                                <div className="item-3 flex gap-4">
                                <picture>
                                    <img src={Images.help.icon4} alt="" />
                                </picture>
                                <div className="text-wrapper">
                                    <h2 className='text-[28px] text-sec font-semibold'>1,926,436</h2>
                                    <p>Payments</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helping