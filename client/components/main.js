import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center border rounded font-semibold mb-2 p-2" id="title">
          Main
          </div>
          <div className="flex flex-col items-center">
            <Link to="/dashboard/profile/a523cc26-69aa-4ca0-ba95-7bb54a86f9b0">Go to Profile</Link>
            <Link to="/dashboard">Go to Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main