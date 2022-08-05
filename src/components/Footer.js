import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4>Copyright &copy; 2022 Heavy Metal Gym</h4>
                    <div className="social-media">
                        <h5>
                        <a href="#"><BsFacebook /> </a>
                        <a href="#"><BsTwitter /> </a>
                        <a href="#"><BsInstagram /> </a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer