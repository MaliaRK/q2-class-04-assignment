import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

const Homepage = () => {
    function handleMenu() {
        console.log('first')
    }
  return (
    <div>
        <Header/>
        <section className='bg-gradient-to-t from-blue-200 to-blue-400 mt-[70px] text-center py-[75px] '>
            <p className='text-sm'>BUILD AN ECOMMERCE WEBSITE</p>
            <p className="text-7xl font-sans py-[25px] ">Start selling immediately. <br /> 
                Grow without limits.
            </p>
            <p className="text-sm">Get everything you need to build, run and scale your <br />
                business—on one unified platform.
            </p>
            <button id="btn" className="rounded-full bg-zinc-950 text-white mt-[35px] py-[10px] px-[25px]">Create Your Store</button>
        </section> 
        <Footer/>
    </div>
  )
}

export default Homepage