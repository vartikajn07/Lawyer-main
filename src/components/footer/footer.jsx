import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-yellow-light lg:px-40 '>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 sm:px-8 sm:gap-10 px-25 py-20'>
        <ul className='grid gap-2'>
          <h1 className='mb-1 text-xl font-semibold'>Menu</h1>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Home(sales)</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Home v1</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Home v2</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Home v3</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>About</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Contact v1</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Contact v2</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Contact v3</a></li>
        </ul>
        <ul className='grid gap-2'><h1>remove</h1>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6   ' href=''>Blog v1</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Blog v1</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Blog v2</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Blog v3</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Blog posts</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Blog category</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Blog category</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Pricing</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Pricing single</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer leading-6' href=''>Practice areas</a></li>
        </ul>
        <ul className='grid gap-2'><h1>remove</h1>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Practice area single</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Case results</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Case results single</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Lawyers</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Lawyers single</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Landing page</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Careers</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Careers single</a></li>
        </ul>
        <ul className='grid gap-2'><h1>remove</h1>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Testimonials</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Coming soon</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Sign in</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Sign up</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Reset password</a></li>
        <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Update password</a></li>
        </ul>
        <ul className='grid gap-2'>
          <h1 className='mb-1 text-xl font-semibold'>Utility pages</h1>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer ' href=''>Start here</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Style guide</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Password protected</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>404 not found</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Licenses</a></li>
          <li><a className='text-gray-800 hover:text-yellow duration-300 text-lg cursor-pointer' href=''>Change Log</a></li>
        </ul>
        <div className='contact-card flex flex-col w-260px bg-white px-10 py-10'>
          <h1 className='font-semibold text-lg'>Contact Us</h1>
          <div className='call flex flex-col flex-wrap gap-3'>
            <a className='' href=''>
            <div className='icon'></div>
            <div className='text-lg'>CALL US</div>
            <div className='text-yellow'>(234) 464 - 4363</div>
            </a>
          </div>
          <div className='email flex flex-col flex-wrap gap-10'>
          <a className='' href=''>
            <div className='icon'></div>
            <div className='text-lg'>SEND US AN EMAIL</div>
            <div className='text-yellow'>support@legalflow.com</div>
            </a>
          </div>
          <div className='chat flex flex-col flex-wrap gap-3'>
          <a className='' href=''>
            <div className='icon'></div>
            <div className='text-lg'>Live chat with us</div>
            <div className='text-yellow'>Open live chat</div>
            </a>
          </div>
          </div>
        </div> 
        <div className='flex justify-between  px-25'>
          <div className='logo'>LEGALFLOW X</div>
          <div className='btns flex gap-5'>
            <btn className='bg-yellow text-white font-semibold px-14 py-6 cursor-pointer'>CONTACT US</btn>
            <btn className='bg-yellow-light border border-black font-semibold px-14 py-6 cursor-pointer hover:bg-yellow hover:text-white hover:border-none'>ABOUT US</btn>
          </div>
        </div>
        <div className='links flex flex-row justify-between'>
          <div className='links'>
            <div className='instagram '>
            <svg className='fill-black hover:fill-white hover:bg-yellow' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
            </div>
          </div>
          <div className='copyright'></div>

        </div>
    </div>

  )
}

export default Footer