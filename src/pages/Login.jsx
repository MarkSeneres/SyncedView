import { useState } from "react"
import LoginAsUser from "../component/LogInAsUser";
import Register from "../component/Register";
import "../css/Form.css"


function Login() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <>
            <div className="Form">
                {
                    currentForm === "login" ? <LoginAsUser onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />

                }
            </div>

        </>
    )
}

export default Login