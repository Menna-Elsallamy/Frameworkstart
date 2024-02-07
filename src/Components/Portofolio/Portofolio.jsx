import React from 'react'
import PhotoOne from './../../Assets/Photos/poert1.png'
import PhotoTwo from './../../Assets/Photos/port2.png'
import PhotoThree from './../../Assets/Photos/port3.png'
import styles from './style.module.css'
export default function Portofolio() {
  return (
    <div className='py-5'>
      <div className="container py-5">
        <h2 className={`text-center ${styles.thirdcolor}`}>Portofolio Component</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <span className={`${styles.beforeLine}`}></span>
          <i className={`fa-solid fa-star fs-5 ${styles.thirdcolor}`}></i>
          <span className={`${styles.afterLine}`}></span>
        </div>
        <div className="row py-5 g-4">
          <div className="col-md-4">
            <div className='position-relative'>

              
              <img className='h-100 w-100 rounded-4 p-0 m-0' src={PhotoOne} alt="" />
              <div data-bs-toggle="modal" data-bs-target="#exampleModal" className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center  rounded-4 ${styles.layer}`}>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className='position-relative'>
              <img className='h-100 w-100 rounded-4 p-0 m-0' src={PhotoTwo} alt="" />
              <div data-bs-toggle="modal" data-bs-target="#exampleModaltwo" className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center  rounded-4 ${styles.layer}`}>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='position-relative'>
              <img className='h-100 w-100 rounded-4' src={PhotoThree} alt="" />
              <div data-bs-toggle="modal" data-bs-target="#exampleModalThree" className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center  rounded-4 ${styles.layer}`}>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='position-relative'>
              <img className='h-100 w-100 rounded-4' src={PhotoOne} alt="" />
              <div data-bs-toggle="modal" data-bs-target="#exampleModal" className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center  rounded-4 ${styles.layer}`}>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='position-relative'>
              <img className='h-100 w-100 rounded-4' src={PhotoTwo} alt="" />
              <div data-bs-toggle="modal" data-bs-target="#exampleModaltwo" className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center  rounded-4 ${styles.layer}`}>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='position-relative'>
              <img className='h-100 w-100 rounded-4' src={PhotoThree} alt="" />
              <div data-bs-toggle="modal" data-bs-target="#exampleModalThree" className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center  rounded-4 ${styles.layer}`}>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <img className='h-100 w-100 rounded-4' src={PhotoOne} data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </div>
      </div>
      <div class="modal fade" id="exampleModaltwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <img className='h-100 w-100 rounded-4' src={PhotoTwo} data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </div>      
      </div>
      <div class="modal fade" id="exampleModalThree" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <img className='h-100 w-100 rounded-4' src={PhotoThree} data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </div>
      </div>
    </div>

  )
}
