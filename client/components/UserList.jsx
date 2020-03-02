import React from 'react'
import User from './User.jsx'

export default ({ users }) => (
  <div className="user-list">

    <p className='lead'>Here's a list of {users.length} completely fictitious people. Adding this for test. Travis second test. This is for the third test. This is the fourth test. Up to the seventh test. WHATEVER. NINTH. TENTH TEST RIGHT HERE. HERE COMES THE RAIN AGAIN.</p>

    <table className="table">
      <tbody>
        { users.map(u => <User {...u} key={u.id} />) }
      </tbody>
    </table>
  </div>
)
