import React from 'react';
// import ssoImage from './sso_image.png'; // Import the image

export default function Home() {
  return (
    <div style={{ padding: '1rem', maxWidth: '640px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', color: '#374151' }}>
        Welcome to Cloud Lab 
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#4B5563' }}>What is Single Sign-On (SSO)?</h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#6B7280' }}>
        Single sign-on (SSO) is an authentication method that enables users to securely authenticate with multiple applications and websites by using just one set of credentials.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#4B5563' }}>How Does SSO Work?</h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#6B7280' }}>
        SSO works based upon a trust relationship set up between an application, known as the service provider, and an identity provider, like OneLogin. This trust relationship is often based upon a certificate that is exchanged between the identity provider and the service provider. This certificate can be used to sign identity information that is being sent from the identity provider to the service provider so that the service provider knows it is coming from a trusted source. In SSO, this identity data takes the form of tokens which contain identifying bits of information about the user like a user’s email address or a username.
      </p>

      <ol style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#6B7280' }}>
        <li>A user browses to the application or website they want access to, aka, the Service Provider.</li>
        <li>The Service Provider sends a token that contains some information about the user, like their email address, to the SSO system, aka, the Identity Provider, as part of a request to authenticate the user.</li>
        <li>The Identity Provider first checks to see whether the user has already been authenticated, in which case it will grant the user access to the Service Provider application and skip to step 5.</li>
        <li>If the user hasn’t logged in, they will be prompted to do so by providing the credentials required by the Identity Provider. This could simply be a username and password or it might include some other form of authentication like a One-Time Password (OTP).</li>
        <li>Once the Identity Provider validates the credentials provided, it will send a token back to the Service Provider confirming a successful authentication.</li>
        <li>This token is passed through the user’s browser to the Service Provider.</li>
        <li>The token that is received by the Service Provider is validated according to the trust relationship that was set up between the Service Provider and the Identity Provider during the initial configuration.</li>
        <li>The user is granted access to the Service Provider.</li>
      </ol>

      {/* Add the image */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        {/* <img src={ssoImage} alt="Single Sign-On" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} /> */}
      </div>
    </div>
  );
}
