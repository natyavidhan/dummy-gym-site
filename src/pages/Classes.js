import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BottomBanner from '../components/BottomBanner'
import "../classes.css"

function Classes() {
  return (
    <>
        <Navbar active={{home: "", class: "active"}} />
        <div className="container mt-5 text-center">
            <h1>Classes</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Callanetics</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-ARqG6KL0nETlPKwl.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Lifting</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-dWj8XKyZe2iMWL9W.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Air Yoga</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-YZ4eyK8Jl0fByMb1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Boxing</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-dWj8XKOE5Kfnz9wZ.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Press & Back</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/allef-vinicius-BQYl_VxaPoU-unsplash-YBB23kQOvkSr6vk0.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Body Building</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/lalalalaldsfdfsgd-mp01aEkz4pC4bE1J.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cardio</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="class-card">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=487,fit=crop/bronxltdlm/Rectangle-mkEkZVqonNU7bqoW.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sport Dances</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomBanner />
        <Footer />
    </>
  )
}

export default Classes