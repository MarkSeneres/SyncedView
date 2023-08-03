import { useState } from "react"
import  Login  from "../pages/Login"
import  Register  from "../pages/Register"
import "../css/Form.css"


function Form() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>   
     <div className="Form">
       {
        currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> :  <Register onFormSwitch={toggleForm}/>
       
       }
     </div>

    </>
  )
}

export default Form