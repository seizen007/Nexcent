import React from 'react'
import Images from '../../assets/Images'

const Community = () => {
    return (
        <div className="community">
            <div className="container">
                <div className="community-wrapper flex flex-col items-center ">
                    <div className="text-wrapper flex flex-col items-center gap-y-[8px] text-center lg:w-1/2 px-7 ">
                        <h2 className='text-[34px] font-semibold leading-[34px] text-sec '>Manage your entire community in a single system</h2>
                        <p className='font-normal text-sec'>Who is Nextcent suitable for?</p>
                    </div>
                    <div className="community-card grid lg:grid-cols-3 grid-cols-1 gap-x-[128px] py-[10px]">
                        {/* card 1  */}
                        <div className="card-1 py-[24px] px-[34px] hover:shadow-lg  hover:-translate-y-4 duration-300">
                        <div className="card-wrapper flex flex-col items-center sm:items-start lg:items-center gap-y-[16px]">
                            <div className="card-logo">
                                <picture>
                                    <img src={Images.community.icon1} alt="" />
                                </picture>
                            </div>
                            <div className="card-text-wrapper sm:text-start text-center lg:text-center">
                                <h2 className='text-[28px] font-bold leading-9 text-sec'>Membership Organisations</h2>
                                <p className='text-sm leading-5 text-sec'>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                        </div>
                        </div>
                        {/* card 2 */}
                        <div className="card-2 py-[24px] px-[34px] hover:shadow-xl hover:-translate-y-4 duration-300">
                        <div className="card-wrapper flex flex-col items-center sm:items-start lg:items-center gap-y-[16px]">
                            <div className="card-logo">
                                <picture>
                                    <img src={Images.community.icon2} alt="" />
                                </picture>
                            </div>
                            <div className="card-text-wrapper sm:text-start text-center lg:text-center">
                                <h2 className='text-[28px] font-bold leading-9 text-sec'>National Associations</h2>
                                <p className='text-sm leading-5 text-sec'>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                        </div>
                        </div>
                        {/* card 3 */}
                        <div className="card-3 py-[24px] px-[34px] hover:shadow-lg hover:-translate-y-4 duration-300">
                        <div className="card-wrapper flex flex-col items-center sm:items-start lg:items-center gap-y-[16px]">
                            <div className="card-logo">
                                <picture>
                                    <img src={Images.community.icon3} alt="" />
                                </picture>
                            </div>
                            <div className="card-text-wrapper sm:text-start text-center lg:text-center">
                                <h2 className='text-[28px] font-bold leading-9 text-sec'>Clubs And Groups</h2>
                                <p className='text-sm leading-5 text-sec'>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community