import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';


const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [user, setUser] = useState(null);
  const {signin, message, setMessage} =useContext(AuthContext);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your signin logic here
    console.log('Signin successful:', formData);
    // Redirect the user to the home page or the signed-in area
    // (You can use React Router's history.push('/path') to navigate programmatically)
  };
  const submitForm=async(e)=>{
    e.preventDefault();
};

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="button" className="btn btn-outline-danger" onClick={submitForm}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;