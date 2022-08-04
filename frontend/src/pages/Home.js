import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
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
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/lalalalaldsfdfsgd-mp01aEkz4pC4bE1J.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Cardio</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/woman-in-black-sports-bra-and-black-pants-sitting-on-white-m26LKr5ZNeiyXWBK.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">AirYoga</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-YbxWoy3LQXubRjXv.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Lifting</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/woman-lifting-barbell-m57zVrgrrLSW97Vy.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Press & Back</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home