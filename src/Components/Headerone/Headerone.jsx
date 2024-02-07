import React from 'react'
import styles from './style.module.css'

export default function Headerone() {
    return (
        <div className={`${styles.bg} py-4`}>
            <div className="container">
                <div className="row py-4 g-4">
                    <div className="col-md-4 text-center">
                        <h2 className='text-white'>LOCATION</h2>
                        <h3 className='text-white'>2215 John Daniel Drive</h3>
                        <h4 className='text-white'>Clark, MO 65243</h4>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2 className='text-white'>AROUND THE WEB</h2>
                        <div className='d-flex justify-content-center'>
                            <div className={`${styles.circle} d-flex justify-content-center align-items-center mx-3 border border-2 border-white`}>
                                <i className='fa-brands fa-facebook fs-2 mx-3 p-0 m-0 text-white'></i>
                            </div>
                            <div className={`${styles.circle} d-flex justify-content-center align-items-center mx-3 border border-2 border-white`}>
                                <i className='fa-brands fa-twitter fs-2 mx-3 text-white'></i>
                            </div>
                            <div className={`${styles.circle} d-flex justify-content-center align-items-center mx-3 border border-2 border-white`}>
                                <i className='fa-brands fa-linkedin fs-2 mx-3 text-white'></i>
                            </div>
                            <div className={`${styles.circle} d-flex justify-content-center align-items-center mx-3 border border-2 border-white`}>
                                <i className='fa-solid fa-globe fs-2 mx-3 text-white'></i>
                            </div>
                    
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2 className='text-white'>ABOUT FREELANCER</h2>
                        <h3 className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
