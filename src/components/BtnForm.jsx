import React from 'react'

function BtnForm({children, isLoading, onClick}) {
  return (
<button onClick={onClick}
disabled={isLoading}
className='flex justify-center items-center gap-2 mt-8 w-full py-2 bg-gray-700
text-white rounded-xl cursor-pointer hover:bg-gray-800 duration-300'
>
{children}
</button>
  )
}

export default BtnForm
