import { useState } from "react";
import "./Signup.css";

function Signup() {
    const [toggle,setToggle] = useState(false);
    const [formState,setFormState] = useState({
        email: "",
        userName:"",
        phone:"",
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setFormState({
            ...formState,
            [e.target.name]:value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setToggle(!toggle);
        console.log(formState);
        // setFormState({
        //     email:"",
        //     userName:"",
        //     phone:""
        // })
    }
    return ( 
        <>
            <div>
                <h1>SignUp Page</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email: <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} placeholder="Email..." />
                        </label>
                        <label htmlFor="userName">
                            UserName: <input type="text" name="userName" id="userName" value={formState.userName} onChange={handleChange} placeholder="UserName..." />
                        </label>
                        <label htmlFor="phone">
                            Phone No: <input type="number" name="phone" id="phone" value={formState.phone} onChange={handleChange} placeholder="Phone..."/>
                        </label>
                        <input type="submit" value="Save" />
                    </form>
                </div>

                <div >
                    {toggle ? (
                        <div className="signup-details">
                            <p>Email: {formState.email}</p>
                            <p>UserName: {formState.userName}</p>
                            <p>Phone No: {formState.phone}</p>
                        </div>
                    ): null}
                </div>
                
            </div>
        </>
     );
}

export default Signup;