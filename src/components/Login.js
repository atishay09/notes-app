import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();
    const [newNote,setnewNote] = useState({
        email:"",password:""
    })

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`https://notes-app-2nus.onrender.com/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email:newNote.email,password:newNote.password}),
      });
      const json = await response.json()
      if(json.sucess){
        //save the auth-token and redirect 
        
        localStorage.setItem('token',json.authToken)
        props.showAlert(`Welcome ${json.username} Logged in Sucessfully`,'success')
        navigate('/')
      }
      else{
        props.showAlert("Invalid Credentials",'danger')
      }
      //setnewNote({email:"",password:""})
  };

  const onChange = (e)=>{
    setnewNote({...newNote,[e.target.name]:e.target.value})
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email1"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value = {newNote.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value = {newNote.password}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
