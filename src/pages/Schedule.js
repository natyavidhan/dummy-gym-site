import React from 'react'

import Navbar from '../components/Navbar'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'
import ScheduleCard from '../components/ScheduleCard'
import "../schedule.css"

function Schedule() {
  return (
    <>
    <Navbar active={{home: "", class: "", plans: "", schedule: "active", contact: ""}} />
    <div className="container mt-5">
        <h1 className='text-center'>Schedule</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <ScheduleCard
                    day="Monday"
                    classes={[
                        {title: "Air Yoga", time: "9:00 AM - 10:00 AM"},
                        {title: "Body Building", time: "10:00 AM - 11:00 AM"}
                ]}/>
            </div>
            <div className="col">
                <ScheduleCard
                    day="Tuesday"
                    classes={[
                        {title: "Air Yoga", time: "9:00 AM - 10:00 AM"},
                        {title: "Body Building", time: "10:00 AM - 11:00 AM"}
                ]}/>
            </div>
            <div className="col">
                <ScheduleCard
                    day="Wednesday"
                    classes={[
                        {title: "Air Yoga", time: "9:00 AM - 10:00 AM"},
                        {title: "Body Building", time: "10:00 AM - 11:00 AM"}
                ]}/>
            </div>
            <div className="col">
                <ScheduleCard
                    day="Thursday"
                    classes={[
                        {title: "Air Yoga", time: "9:00 AM - 10:00 AM"},
                        {title: "Body Building", time: "10:00 AM - 11:00 AM"}
                ]}/>
            </div>
        </div>
    </div>
    <BottomBanner />
    <Footer />
    </>
  )
}

export default Schedule