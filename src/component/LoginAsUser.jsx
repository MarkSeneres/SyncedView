import { useState } from "react"

function LoginAsUser(props) {
    const [email, setEmail] = useState('');
    const [pass, SetPass] = useState('');

    const handleSubmit = (e) => {
        e.perventDefault();
        console.log(email);

    }

    return (
        <>

            <div className="auth-form-container">
                <h2 className="login-color">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => SetPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <p style={{color: "white", fontSize: "12px"}}>Forgot password?</p>
                    <button className="login-btn" type="submit">Log In</button>
                </form>
                <button className="Link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign Up.</button>
            </div>
        </>
    )
}

export default LoginAsUser