import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'
import Header from './header'

const Dummy = () => {
  return (
    <div>
      <Header />
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center border rounded font-semibold mb-2 p-2" id="title">
           Welcome to the shit tin
          </div>
          <div className="flex flex-col items-center">    
          <Link to="/dashboard/">Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
