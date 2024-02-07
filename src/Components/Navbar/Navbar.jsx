import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
export default function Navbar() {
    return (
        <body data-bs-spy="scroll" data-bs-target="#navbar-example">
        <div>
            
           <nav id='navbar-example' className={`${styles.navbarcolor} navbar fixed-top navbar-expand-lg py-3`}>
                <div class="container">
                    <Link to={''} class="navbar-brand text-white" href="#">STARTFRAMEWORK</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={'/about'} class="nav-link active text-white" aria-current="page">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/portofolio'} class="nav-link text-white">PORTOFOLIO</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/parent'} class="nav-link text-white">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </body>
    )
}
