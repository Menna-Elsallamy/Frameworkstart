import React from 'react'
import styles from './style.module.css'


export default function Contact() {
  return (
    <div className='py-5'>
      <div className="container py-5">
        <h2 className={`text-center ${styles.thirdcolor}`}>Contact Component</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <span className={`${styles.beforeLine}`}></span>
          <i className={`fa-solid fa-star fs-5 ${styles.thirdcolor}`}></i>
          <span className={`${styles.afterLine}`}></span>
        </div>
        <div className='py-5'>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="userName" />
            <label htmlFor='floatingInput'>User Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingage" placeholder="userAge" />
            <label htmlFor='floatingage'>User Age</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingpassword" placeholder="UserPassword" />
            <label htmlFor='floatingpassword'>User Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingRepassword" placeholder="Repassword" />
            <label htmlFor='floatingRepassword'>Repassword</label>
          </div>
        </div>
        <button className={`btn btn-sm py-2 text-white ${styles.maincolor}`}>Send Message</button>
              </div>
    </div>

  )
}
