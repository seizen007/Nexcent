import React from 'react'
import Button from '../Button/Button'
import Images from '../../assets/Images'
const Unseen = () => {
    return (
        <div className="unseen">
            <div className="container">
                <div className="unseen-wrapper font-inter flex flex-wrap items-center justify-center lg:justify-between my-[42px]  ">
                    <div className="unseen-image ">
                        <picture>
                            <img src={Images.unseen} alt="" />
                        </picture>
                    </div>
                    <div className="texts lg:w-1/2 xl:w-[661px] flex flex-col items-center lg:items-start gap-8">
                    <div className="text-wrapper text-center lg:text-start lg:pr-[60px] flex flex-col gap-4">
                        <h2 className='lg:text-[36px] text-[30px]  font-semibold text-sec leading-[44px]'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='text-sm text-sec font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius
                            fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                            risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        
                    </div>
                    <div className="button">
                            <Button className={'py-[14px] px-[32px]'}>learn more</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Unseen