import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div>
      <h1>Welcome to Amaz.io!</h1>
      <Link className="btn" to="/catalogue">Explore Products</ Link>
    </div>
  )
}

export default HomePage;