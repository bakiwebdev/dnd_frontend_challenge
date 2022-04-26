import React from 'react'

const TagContainer = () => {
  return (
    <div className='border-[1px] border-gray-300 h-96 w-80 rounded-md p-2 flex flex-col'>
        {/* title */}
        <div className='text-lg text-gray-500 capitalize mb-1'>Issues</div>
        <div className='flex-1 bg-secondary-light'>i</div>
        <div>button to add tags</div>
    </div>
  )
}

export default TagContainer