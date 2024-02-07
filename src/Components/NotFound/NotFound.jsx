import React from 'react'
import notFound from './../../Assets/Photos/error-page-not-found-vector-27898543.webp'
export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <img className='vh-100' src={notFound} alt='notfoundimage'/>
    </div>
  )
}
