import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const DrugMD = () => {
  return (
    <div>
        <div className='mt-24 rounded-sm flex items-center border-2 border-cyan-600 p-2'>
            <BiSearchAlt size={30} style={{ color: "rgb(8 145 178)" }} className="basis-2/12 md:basis-1/12 cursor-pointer" />
            <input
                type={'text'}
                className="outline-none basis-10/12 md:basis-11/12 bg-cyan-100/30 p-1 text-cyan-800"
            />
        </div>
        <p className='text-xs mt-2 text-cyan-800'>Search for any drug and get verified information about it.</p>
    </div>
  )
}

export default DrugMD