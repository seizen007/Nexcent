import React from 'react'

const Button = ({ href, className, children }) => {
    return (
        <a href={`${href}`} className={`button rounded-md bg-prime text-white capitalize text-sm border-transparent border-2 hover:border-prime hover:bg-prime/30 duration-150 ease-in-out ${className}`}>{children}</a>
    )
}

export default Button