import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';


const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const {message, SignUp} =useContext(AuthContext);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Add your signup logic here
    console.log('Signup successful:', formData);
    // Redirect the user to the home page or the signed-in area
    // (You can use React Router's history.push('/path') to navigate programmatically)
  };
  const submitForm=async(e)=>{
    e.preventDefault();
    
};


  return (
    <div>


      <h2 className='text-center m-10'>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className='d-flex p-2 justify-content-center'>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br/>
        </div>
        <div className="d-flex p-2 justify-content-center ">
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/>
        </div>
        <div className="d-flex p-2 justify-content-center ">
        <input type="contact-number" name="contact-number" placeholder="Contact-Number" onChange={handleChange} /><br/>
        </div>

        <div className='d-flex p-2 justify-content-center'>
        <button type="button" className="btn btn-outline-danger" onClick={submitForm}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;