import React from 'react'

import Navbar from '../components/Navbar'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'

function Contact() {
    let url = "https://studiousapi.vercel.app/utility/contact"
    const submit = () => {
        let data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
        console.log(data)
        fetch(url, {
            method: 'POST',
            // send as form data
            body: new FormData(document.querySelector("form"))
        })
        .then(res => res.json())
        .then(data => {window.location.href = "/"})
        .catch(err => {console.log(err)})
    }
    return (
        <>
            <Navbar active={{home: "", class: "", plans: "", schedule: "", contact: "active"}} />
            <div className="container">
                <div className="contact-content">
                    <h1>Contact Us</h1>
                    <div className="contact-form">
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={submit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <BottomBanner />
            <Footer />
        </>
    )
}

export default Contact