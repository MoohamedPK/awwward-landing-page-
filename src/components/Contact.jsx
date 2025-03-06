import React from 'react'

function Contact() {
  return (
    <section className='contact-sec w-screen h-[150dvh] relative'>
        <div className="contact-container w-full h-full flex justify-center items-center">
            <div className="contact-image absolute md:top-10 top-70 w-1/3  md:w-1/7 ">
                <img src="/img/swordman.webp" alt="" />
            </div>

            <div className="content-sec flex flex-col justify-center items-center bg-black md:w-1/3 md:h-2/4 h-1/3 w-2/3 rounded-2xl text-white text-center p-4 space-y-7">
                <h1 className='md:text-[60px] text-[30px] font-zentry-regular tracking-wide'>Let's build the <br/>new era of <br/> gaming together</h1>

                <button className='text-sm font-general bg-white text-black px-8 py-4 rounded-full'>contact us</button>
            </div>
        </div>
    </section>
  )
}

export default Contact