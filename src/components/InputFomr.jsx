import React from 'react'

function InputFomr({text, error, id, type, ...itemInput}) {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label htmlFor={id}>{text}</label>
        <input className={`' bg-gray-600 text-red-500 px-4 py-2 rounded-xl ' ${error ? "outline-1 outline-red-500" : "outline-0"}`} 
        
        type={type} 
        id={id}
        {...itemInput}
        />
        {error && <p className='text-xs text-blue-600'>{error}</p>}
      </div>
    </div>
  )
}

export default InputFomr
