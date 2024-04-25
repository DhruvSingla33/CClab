import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      // Update the URL to remove the extra '/'
      const res = await fetch('http://localhost:5500/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }

      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#edf2f7' }}>
      <div style={{ backgroundColor: '#F5EFE6', padding: '32px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: '600', marginBottom: '2rem' }}>Student Enrollment Signup Form</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type='text'
            placeholder='First Name'
            id='firstName'
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0' }}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            id='lastName'
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0' }}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Username'
            id='username'
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0' }}
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0' }}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0' }}
            onChange={handleChange}
          />
          <input
            type='date'
            placeholder='Registration Date'
            id='registrationDate'
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0' }}
            onChange={handleChange}
          />
          <button
            disabled={loading}
            style={{ backgroundColor: '#1A4D2E', color: '#ffffff', padding: '0.75rem', borderRadius: '4px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background-color 0.3s' }}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth />
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <p style={{ marginRight: '0.5rem' }}>Have an account?</p>
          <Link to='/sign-in' style={{ color: '#3182ce', textDecoration: 'none' }}>
            Sign in
          </Link>
        </div>
        {error && <p style={{ color: '#e53e3e', textAlign: 'center', marginTop: '1rem' }}>Something went wrong!</p>}
      </div>
    </div>
  );
}
