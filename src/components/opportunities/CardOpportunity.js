import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const CardOpportunity = ({jobTitle, industry, salary, shift, description, location}) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <animated.div className="job-card content my-2 mx-1"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <h2 className="font-bold mb-1 text-2xl">{jobTitle}</h2>
      <h3><strong>Industry: </strong>{industry}</h3>
      <p><strong>Salary: </strong>{salary}</p>
      <p><strong>Shift:</strong> {shift}</p>
      <div className="card-body">
        {description}
      </div>
      <p><strong>Location: </strong>{location}</p>
    </animated.div>
  )
}

export default CardOpportunity
