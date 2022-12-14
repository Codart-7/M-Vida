import React from 'react'
import landingImg from "../assets/drug.jpg"

const Landing = () => {
  return (
    <div className=''>
      <section className='mb-6 md:min-h-[100vh] md:flex md:flex-col md:justify-center md:text-2xl'>
          <div className='my-4'>
            <h2 className='text-3xl md:text-4xl font-bold'>Who we are</h2>
            <div className='w-[20%] md:w-[10%] h-2 bg-orange-600'></div>
          </div>
          <div className='flex flex-wrap gap-8 justify-center my-4'>
            <article className="w-full md:w-[48%] flex flex-col justify-center">
              <p>
                <span className='font-bold'>M-Vida</span> is a health assistant system that helps the users manage their health and medical data.
              </p>
              <p className='mt-4'>
                It's current core features are medication management and providing information about drugs.
                The purpose of this feature is ensure the necessary medication adherence.
                You can use it to record your medication, and the progress made accordingly.
              </p>
            </article>
            <img className="w-full md:w-[48%]" src={landingImg} alt="landing page" />
          </div>
      </section>
      <section className='my-4 md:text-2xl mb-12'>
        <div>
          <h2 className='text-3xl font-bold md:text-4xl'>Our Core Services</h2>
          <div className='w-[20%] h-2 bg-orange-600'></div>
        </div>
        <ul className='ml-8 flex flex-col gap-3 mt-6 md:text-xl'>
          <li>Medication Management.</li>
          <li>Access to Health Services.</li>
          <li>Personal Health Assistant.</li>
          <li>Medical Information Management.</li>
        </ul>
      </section>
    </div>
  )
}

export default Landing