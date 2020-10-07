import React from 'react'
import Band from './Band'


const Bands = props => {
  const bands = () =>  props.bands.map(band => {
    return <Band key={band.id} band={band} deleteBand={props.deleteBand} />
  })

  console.log(props)
  return (
    <div>
      <ul>
        {bands()}
      </ul>
    </div>
  )
}

export default Bands