import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Main = () => {
  const [user, setName] = useParams('enter your name') 
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
            <Link to="/">Go to shit tin</Link>
            <input type="text" className="text-black" onChange={(event) => setName(event.target.value)} value={user}/>
            <Link to={`/dashboard/profile/${user}`}>Roll...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
