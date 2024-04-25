import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser} = useSelector(state => state.user);
  const containerStyle = {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#F5F5F5', // Change background color as needed
    borderRadius: '8px',
    textAlign: 'center',
  };

  const signInButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };
  
  if (currentUser) {
    return <Outlet />;
  } else {
    // If the user is not signed in, show a pop-up message
    return (
      <div style={containerStyle}>
        <h2 style={{ color: '#ff0000' }}>You are not signed in</h2>
        <p>Please sign in to access this page</p>
        <Link to='/sign-in'>
          <button style={signInButtonStyle}>Sign In</button>
        </Link>
      </div>
    );
  }
}
