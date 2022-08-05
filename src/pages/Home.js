import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import '../App.css';
import '../common.css'

function Home() {
  return (
    <>
        <Navbar active={{home: "active", class: ""}} />
        <div className="text-center section-1">
            <div className="container mt-5">
                <div className="hometop">
                    <h2><i>Make fitness a habit. Motivation is what gets you started. Habit is what keeps you going. - Jim Ryin.</i></h2>
                    <h1 className='title'>Heavy Metal Gym</h1>
                </div>
                <div className="mt-5">
                    <h3>What are you waiting for?</h3>
                    <button className="btn btn-danger btn-large"><h2>Lets Get Started</h2></button>
                </div>
            </div>
        </div>
        <div className="section-2 mt-5 mb-5">
            <div className="container text-center">
                <h2 className='class-title'>Classes</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/lalalalaldsfdfsgd-mp01aEkz4pC4bE1J.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cardio</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/woman-in-black-sports-bra-and-black-pants-sitting-on-white-m26LKr5ZNeiyXWBK.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">AirYoga</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-YbxWoy3LQXubRjXv.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Lifting</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/woman-lifting-barbell-m57zVrgrrLSW97Vy.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Press & Back</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About />
        <Footer />
    </>
  )
}

export default Home