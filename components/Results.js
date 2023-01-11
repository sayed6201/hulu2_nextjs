import React from 'react'
import Thumbnail from './Thumbnail'
import {FlipMove} from 'react-flip-move'

function Results({results}) {
  return (
    // 3xl -> is the custom break point. configured in
    // <FlipMove></FlipMove> -> use this for hte animation
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map(result=>(
        <Thumbnail
          key = {result.id} result = {result}
         />
      ))}
    </div>
  )
}

export default Results