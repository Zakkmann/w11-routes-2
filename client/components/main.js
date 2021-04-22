import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  const [user, setName] = useState("George Floyd?")
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center border rounded font-semibold mb-2 p-2" id="title">
          Main
          </div>
          <div className="flex flex-col items-center">
            <Link to="/dashboard/profile/a523cc26-69aa-4ca0-ba95-7bb54a86f9b0">Go To Profile</Link>
            <Link to="/dashboard">Go To Root</Link>
            <Link to="/">Go to shit tin</Link>
            <div>Enter your name, nigger:</div>
            <div className="text-black">
              <input type="text" onChange={(event) => setName(event.target.value)} value={user}/>
            </div>

            <Link to={`/dashboard/profile/${user}`}>
            <button type="button"> To the gallows! </button>
            </Link>          
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main