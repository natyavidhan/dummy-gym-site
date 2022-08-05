import React from 'react'

import Navbar from '../components/Navbar'
import PlanCard from '../components/PlanCard'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'

function Plans() {
  return (
    <>
        <Navbar active={{home: "", class: "", plans: "active", schedule: "", contact: ""}} />
        <div className="container mt-5">
            <h1 className="text-center">
                Prices & Plans
            </h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <PlanCard
                            title="Basic"
                            price={1000}
                            benefits={["one", "two", "three"]}
                        />
                    </div>
                    <div className="col">
                        <PlanCard
                            title="Pro"
                            price={1500}
                            benefits={["one", "two", "three"]}
                        />
                    </div>
                    <div className="col">
                        <PlanCard
                            title="Premium"
                            price={2000}
                            benefits={["one", "two", "three"]}
                        />
                    </div>
                    <div className="col">
                        <PlanCard
                            title="Ultimate"
                            price={3000}
                            benefits={["one", "two", "three"]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <BottomBanner />
        <Footer />
    </>
  )
}

export default Plans