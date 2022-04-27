import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='bg-black bg-opacity-40 fixed inset-0 z-50'>
        <div className='h-screen flex justify-center items-center'>
            {children}
        </div>
    </div>
  )
}

export default Modal