import React, { useState } from 'react'
import BreadCrum from './Partials/BreadCrum'
import formValidator from './FormValidators/formValidator'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let [data, setData] = useState({
        username: "",
        password: ""
    })
    
    let [errorMessage, setErrorMessage] = useState({
        username: "Username Field Is Mendatory"       
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e){
        let {name,value} = e.target
        if(name!=="password"){
            setErrorMessage((old)=>{
                return{
                    ...old,
                    [name]:formValidator(e)
                }
            })
        }
        setData((old)=>{
            return({
                ...old,
                [name]:value
            })
        })
    }
    
    async function postData(e){
        e.preventDefault()
        if(data.password === data.cpassword){
            let error = Object.values(errorMessage).find(x=>x!=="")
            if(error)
                setShow(true)
            else{
                let response = await fetch("/users",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({...data})
                })
                response = await response.json()
                if(response)
                    navigate("/login")
            }
        }
        else{
            setShow(true)
            setErrorMessage((old)=>{
                return{
                    ...old,
                    'password':"Password And Confirm Password Doesn't Match"
                }
            })
        }
    }

  return (
    <>
    <BreadCrum title="Login"/>

    <div className="container my-3">
        <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-11 m-auto">
                <h5 className='bg-primary p-2 text-center text-light'>Login To Your Account</h5>
                <form onSubmit={postData}>
                    <div className="mb-3">
                        <input type="text" name="username" onChange={getInputData} className={`form-control border-2 ${show && errorMessage.username?"border-danger":"border-primary"}`} placeholder='Enter User Name' />
                        {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p>:""}
                    </div>

                    <div className="mb-3">
                        <input type="password" name="password" onChange={getInputData} className={`form-control border-2 ${show && errorMessage.password?"border-danger":"border-primary"}`} placeholder='Enter Password' />
                        {show && errorMessage.password ? <p className='text-danger'>{errorMessage.password}</p>:""}
                    </div>

                    <div className="mb-3">  
                        <button type='submit' className='btn btn-primary w-100'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
