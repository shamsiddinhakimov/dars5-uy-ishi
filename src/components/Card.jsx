import React from 'react'


export default function Card(props) {
    const {value} = props
  return (
    <div>
        <div className='center_container_box_third'>
        <h2>{value}</h2>
    </div>
    </div>
  )
}
