import { useState } from "react"

const Popup = (props) => {
    const [showModal, setShowModal]= useState(true)
  return (
    <div className={showModal ? 'w-full flex items-center justify-center m-auto bg-black/40 h-[100vh] fixed z-40 top-0':"hidden"}>
        <div className='min-w-[300px]  bg-white'>
            <p className='text-2xl font-bold'>{props.message}</p>
            <button onClick={()=>setShowModal(false)} className='border-2 border-custom-blue bg-custom-blue text-white hover:bg-white hover:text-custom-blue rounded px-2 p-1'>Close</button>
        </div>
    </div>
  )
}

export default Popup