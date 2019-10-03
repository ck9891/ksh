import React from 'react'

const CardOpportunity = ({jobTitle, industry, salary, shift, description, location}) => {
  return (
    <div className="job-card content my-2 mx-1">
      <h2 className="font-bold mb-1 text-2xl">{jobTitle}</h2>
      <h3><strong>Industry: </strong>{industry}</h3>
      <p><strong>Salary: </strong>{salary}</p>
      <p><strong>Shift:</strong> {shift}</p>
      <div className="card-body">
        {description}
      </div>
      <p><strong>Location: </strong>{location}</p>
    </div>
  )
}

export default CardOpportunity
