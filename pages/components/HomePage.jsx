import React from 'react'
import Image from 'next/image'


const HomePage = () => {
  return (
    // <div className='flex  justify-center  w-full bg-fixed bg-center bg-cover  '>
    //     {/* overlay */}
    //     <div className='absolute top-0 left-0 right-0 bottom-0' />
    //     <Image src={TitlePic} height="auto" width="100%" alt='/' />
    // </div>
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
    {/* overlay */}
    <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' />
</div>
  )






}

export default HomePage