import React from 'react'
import PropTypes from 'prop-types'

function ScheduleCard(props) {
  return (
    <div className='schedule-card'>
        <h2>{props.day}</h2>
        <div className='schedule-card-content'>
            {props.classes.map((classItem, index) => {
                return (
                    <div className='schedule-card-class' key={index}>
                        <h3>{classItem.title}</h3>
                        <p>{classItem.time}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

ScheduleCard.propTypes = {
    day: PropTypes.string.isRequired,
    classes: PropTypes.array.isRequired,
}

export default ScheduleCard
