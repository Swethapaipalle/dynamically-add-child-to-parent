import React from 'react'
import Child from './Child';


const Parent = ({children}) => {

  return (
    <>
        <div>Parent</div>
        {children}
    </>
  )
}

export default Parent