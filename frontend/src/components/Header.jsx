import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black', // Change color as needed
  };

  const listItemStyle = {
    margin: '0 4px', // Adjust margin as needed
    listStyleType: 'none',
    display: 'inline-block',
    color: 'white'

  };

  const profileImageStyle = {
    height: '28px', // Adjust height as needed
    width: '28px', // Adjust width as needed
    borderRadius: '50%', // Make the image round
    objectFit: 'cover',
  };

  const headerStyle = {
    backgroundColor: '#E8DFCA', // Change background color as needed
    borderBottom: '2px solid #ccc', // Add a border bottom for separation
  };

  const containerStyle = {
    backgroundColor: '#153448',
    fontWeight: 'bold',
    color:'white',
    margin: '0 auto',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'right'
  };

  const titleStyle = {
    fontWeight: 'bold',
    margin: '0',
    marginLeft: '16px'
     // Adjust left margin to move "Cloud Lab" to the left
     // Adjust left margin to move "Cloud Lab" to the left
  };

  return (
    <div style={headerStyle}>
      <Link to='/' style={linkStyle}>
          <h1 style={titleStyle}>Cloud  Computing Lab</h1>
        </Link>
      <div style={containerStyle}>
      <h1>               </h1>
        <ul style={{ margin: '0', padding: '0', listStyleType: 'none', display: 'flex', gap: '4px' }}>
          <Link to='/' style={linkStyle}>
            <li style={listItemStyle}>Home</li>
          </Link>
          <Link to='/calculator' style={linkStyle}>
            <li style={listItemStyle}>Calculator</li>
          </Link>
          <Link to='/expense' style={linkStyle}>
            <li style={listItemStyle}>Expense</li>
          </Link>
          <Link to='/profile' style={linkStyle}>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' style={profileImageStyle} />
            ) : (
              <li style={listItemStyle}>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
