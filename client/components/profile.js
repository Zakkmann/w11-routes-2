import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { user } = useParams()

  return (
    <div>
      <Head title="Profile" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div className="flex justify-center border rounded font-semibold mb-2 p-2" id="title">
          Profile
        </div>
        <div className="flex flex-col items-center">
            <Link to="/dashboard">Go To Root</Link>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
          <div id="username" className="flex justify-center border rounded font-semibold mb-2 p-2">{user}</div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
