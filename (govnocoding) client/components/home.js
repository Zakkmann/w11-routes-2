import React from 'react'
import { Switch, Route, Link, useParams } from 'react-router-dom'

import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'
import Head from './head'

const Home = () => {
  const [url, setUrl] = useParams('enter url') 
  return (
    <div>
      <Header />
       <Head title="Home" />
        <Switch>
          {/* <Route exact path="/*" component={() => <Home />} /> */}
          <Route exact path="/dashboard" component={() => <Dashboard />} />
          <Route exact path="/dashboard/main" component={() => <Main />} />
          <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
        </Switch>
        <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center border rounded font-semibold mb-2 p-2" id="title">
          Home  
          </div>
          <div>
          <input type="text" className="text-black" onChange={(event) => setUrl(event.target.value)} value={url}/>
            <div>
              <Link to={`${url}`}>Go Git</Link>
              </div>
            <div>
              <Link to="/dummy">Go to shit tin</Link>
            </div>
          </div>
        </div>
        </div>  
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
