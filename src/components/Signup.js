import React, { useState } from "react";
import  { useNavigate } from 'react-router-dom'

const Signup = (props) => {

    const navigate = useNavigate()

    const [newNote,setnewNote] = useState({
        name:"",email:"",password:"",confpassword:""
    })

    const onChange = (e)=>{
        setnewNote({...newNote,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name:newNote.name,email:newNote.email,password:newNote.password}),
      });
      const json = await response.json()
        //save the auth-token and redirect 
        if(json.sucess){
            //save the auth-token and redirect 
            localStorage.setItem('token',json.authToken)
            props.showAlert(`{Welcome ${newNote.name} your account created Sucessfully}`,'success')
            navigate('/')
          }
          else{
            props.showAlert("Invalid Credentials",'danger')
          }
    }



  return (
    <>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            value = {newNote.name}
            required
            minLength={3}
          />
        </div>
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
            required
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
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confpassword" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confpassword"
            name="confpassword"
            onChange={onChange}
            value = {newNote.confpassword}
            required
            minLength={5}
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
          SignIn
        </button>
      </form>
    </>
  )
}

export default Signup