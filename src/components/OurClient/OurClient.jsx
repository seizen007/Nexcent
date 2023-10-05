import React from 'react'
import Images from '../../assets/Images'

const OurClient = () => {
    return (
        <div className="ourclient">
            <div className="container">
                <div className="ourclient-wrapper py-[40px]">
                    <div className="text-wrapper flex flex-col items-center">
                        <h2 className='text-[34px] font-semibold text-sec '>Our Client</h2>
                        <p className='font-normal text-center text-sec'>We have been working with some Fortune 500+ clients</p>
                    </div>
                    <div className="logo-wrapper  flex items-center  justify-around lg:justify-between gap-5 flex-wrap py-[34px]">
                        <picture>
                            <img src={Images.clients.client1} alt="" />
                        </picture>
                        <picture>
                            <img src={Images.clients.client2} alt="" />
                        </picture>
                        <picture>
                            <img src={Images.clients.client3} alt="" />
                        </picture>
                        <picture>
                            <img src={Images.clients.client4} alt="" />
                        </picture>
                        <picture>
                            <img src={Images.clients.client5} alt="" />
                        </picture>
                        <picture>
                            <img src={Images.clients.client6} alt="" />
                        </picture>
                        <picture>
                            <img src={Images.clients.client7} alt="" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient