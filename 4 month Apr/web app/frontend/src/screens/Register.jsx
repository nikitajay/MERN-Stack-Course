import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder='Enter your name' />
      <input type="text" placeholder='Enter your email' />
      <input type="password" placeholder='Enter your password' />
      <button>Register</button>
      <p className='text-danger'>Already have an account? <a href="/">Login</a></p>
    </div>
  )
}

export default Register
