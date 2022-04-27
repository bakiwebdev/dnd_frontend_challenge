import React from 'react'
import AddTagButton from '../button'
import TagListContainer from '../tag_list_container'

const TagContainer = () => {
  return (
    <div className='border-[1px] border-gray-300 h-auto w-80 rounded-md p-2 flex flex-col'>
        {/* title */}
        <div className='text-lg text-gray-500 capitalize mb-1'>Issues</div>
        <div className='flex-1'>
          <TagListContainer />
        </div>
        <AddTagButton />
    </div>
  )
}

export default TagContainer