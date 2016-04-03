import React from 'react'
import { transparentBg } from '../styles'

export default function MainContainer({ children }) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      {children}
    </div>
  )
}
