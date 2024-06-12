import React, { useState } from 'react';
import './Loginsingup.css'
import user_icon from '../assests/person.png'
import email_icon from '../assests/email.png'
import password_icon from '../assests/password.png'

const Loginsingup = () => {
    const[action,setAction]=useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (action === "Sign Up" && !/^[A-Za-z\s]+$/.test(name)) {
            tempErrors.name = "Name can only contain letters and spaces.";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            tempErrors.email = "Email is not valid.";
        }
        if (!/^.{6,}$/.test(password)) {
            tempErrors.password = "Password must be at least 6 characters long.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            // Handle form submission
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underlined'></div>

            </div>
            
            <div className='inputs'>
                {action==="Login"?<div></div>: <div className='input'>
                    <img src={user_icon} alt=''/> 
                    <input type="text" placeholder="Enter your name" value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                            {errors.name && <div className='error'>{errors.name}</div>}

                </div>}
               
                <div className='input'>
                    <img src={email_icon} alt=''/> 
                    <input type="email" placeholder="Enter your Email"  value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                        {errors.email && <div className='error'>{errors.email}</div>}

                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/> 
                    <input type="password" placeholder="Enter your Password"  value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                         {errors.password && <div className='error'>{errors.password}</div>}

                </div>

            </div>
            {action=="Sing Up"?<div></div>:<div className='forgot'>Lost Password?<span>Click Here!</span></div>}
            
            <div className='submitform'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sing Up")}}> Sign Up</div>
                <div className={action==="Sing Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

            </div>
            <div  className="sub"  onClick={handleSubmit}>
                    Submit
                </div>
            
        </div>
    );
};

export default Loginsingup;