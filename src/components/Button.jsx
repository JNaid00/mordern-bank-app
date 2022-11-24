import React from 'react'

const Button = ({styles}) => {
  return (
	<button type="button" className={`rounded-2xl py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline ${styles}`}> Get Started </button>
  )
}

export default Button