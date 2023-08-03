import { useState } from "react"

function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, SetPass] = useState ('');

  const handleSubmit = (e) => {
    e.perventDefault();
    console.log(email);

  }

  return (
      <>
       
        <div className="auth-form-container">
        <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              <label htmlFor="password">Password</label>
              <input value={pass} onChange={(e) => SetPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
              <button className="login-btn" type="submit">Log In</button>
          </form>
          <button className="Link-btn" onClick={() => props.onFormSwitch('register')}>Don't have a acount? Register here.</button>
        </div>
      </>
  )
}

export default Login