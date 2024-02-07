import React from 'react'
import styles from './style.module.scss'
export default function About() {
  return (
    <div  className={`${styles.aboutbg} py-5`}>
    <div className="container py-5">
        <h2 className='text-center text-white'>About Component</h2>
        <div className='d-flex justify-content-center align-items-center py-3'>
      <span className={`${styles.beforeLine}`}></span>
          <i className={`fa-solid fa-star fs-5 text-white`}></i>
          <span className={`${styles.afterLine}`}></span>
        </div>
       
        <div className="row py-5">
          <div className="col-md-6">
            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
