import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm  bg-white text-orange-800">
  <div className="navbar-start">
    <Link href={"/"} className="btn btn-ghost font-extrabold text-2xl font-serif">Books.</Link>
  </div>
  <div className="navbar-end flex gap-1.5">
    
    <button className="btn btn-ghost btn-circle">
      <Link href={"/favorites"}><svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /> </svg></Link>
    </button>
    <button className="btn btn-ghost btn-circle">
      <Link href={"/search"}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg></Link>
    </button>
    <button className="btn btn-ghost btn-circle ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /> </svg>
    </button>
  


  </div>
</div>
  )
}
