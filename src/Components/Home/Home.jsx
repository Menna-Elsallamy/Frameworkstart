import React from 'react'
import avatar from './../../Assets/Photos/avataaars.svg'
import styles from './style.module.css'
export default function Home() {
  return (
    <div className={`${styles.background} py-5`}>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='py-5'>
          <img className='' src={avatar} alt='' />
          <h2 className='text-white'>START FRAMEWORK</h2>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center py-3'>
      <span className={`${styles.beforeLine}`}></span>
          <i className={`fa-solid fa-star fs-5 text-white ${styles.thirdcolor}`}></i>
          <span className={`${styles.afterLine}`}></span>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
