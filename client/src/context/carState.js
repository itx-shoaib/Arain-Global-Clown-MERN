import React from 'react'
import carContext from "./carContext";

const carState = (props) => {
  return (
    <carContext.Provider>
        {props.children}
    </carContext.Provider>
  )
}

export default carState