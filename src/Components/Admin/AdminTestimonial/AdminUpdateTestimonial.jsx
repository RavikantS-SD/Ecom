import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {getTestimonial, updateTestimonial} from "../../../Redux/Actioncreators/TestimonialActionCreators"
import formValidator from '../../FormValidators/formValidator'
import imageValidator from '../../FormValidators/imageValidator'

export default function AdminUpdateTestimonial() {
  let [allData, setAllData] = useState([]) 
  let [data,setData] = useState({
    name: "",
    pic: "",
    message:"",
    active: true 
  })

  let [errorMessage,setErrorMessage] = useState({
    name: "",
    pic: "",
    message:""
  })

  let [show,setShow] = useState(false)
  let navigate = useNavigate()
  let {id} = useParams()
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector(state=>state.TestimonialStateData)

  function getInputData(e){
    var name = e.target.name
    var value = e.target.files ? "/testimonials/" +e.target.files[0].name : e.target.value
    if(name!=="active"){  
      setErrorMessage((old)=>{
        return{
          ...old,
          [name]: name === "pic"?imageValidator(e):formValidator(e)
        }
      })
    }
    setData((old)=>{
      return{
        ...old,
        [name]:name==="active" ? (value === "1" ? true : false) : value
       }
    })
  }
  function postData(e){
    e.preventDefault()
    let error = Object.values(errorMessage).find((x)=>x!=="")
    if(error)
      setShow(true)
    else{
      let item = allData.find((x)=> x.name?.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id!==id)
      if(item){
        setShow(true)
        setErrorMessage((old)=>{
          return{
            ...old,
            "name":"Testimonial Name is  Already Exist"
          }
        })
      }
      else{
        dispatch(updateTestimonial({ id:id,...data }))
          navigate("/admin/testimonial")
      }
    }
  }
  useEffect(() => {
    ( () => {
      dispatch(getTestimonial())
      if(TestimonialStateData.length){
        setAllData(TestimonialStateData)
        setData(TestimonialStateData.find((x)=>x.id===id))
      }
      else
        setAllData([])
    })()  
  }, [TestimonialStateData.length])
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-2 col-md-3">
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-md-9">
                <h5 className='bg-primary text-center text-light p-2'>Testimonial <Link to="/admin/Testimonial"><i className='fa fa-arrow-left text-light float-end'></i> </Link></h5>
                <form onSubmit={postData}>
                  <div className="row">
                    <div className="col-md-6 mt-1">
                      <label>Name*</label>
                      <input type="text" name="name" value={data.name} onChange={getInputData} placeholder="Testimonial Name" className={`form-control ${show && errorMessage.name?"border-danger":"border-primary"} border-2`} />
                      {show && errorMessage.name?<p className='text-danger text-capitalize'>{errorMessage.name}</p>:""}
                    </div>
                    <div className="col-md-6 mt-1">
                      <label>Pic</label>
                      <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ?"border-danger":"border-primary"} border-2`} />
                      {show && errorMessage.pic?<p className='text-danger text-capitalize'>{errorMessage.pic}</p>:""}
                    </div>
                    <div className="mb-2 mt-2">
                      <label>Message</label>
                      <textarea name="message" value={data.message} className={`form-control ${show && errorMessage.message ?"border-danger":"border-primary"} border-2`} onChange={getInputData} placeholder='Message...' rows={5}></textarea>
                      {show && errorMessage.message?<p className='text-danger text-capitalize'>{errorMessage.message}</p>:""}
                    </div>
                    <div className="row">
                      <div className="col-md-6 mt-1">
                        <label>Active*</label>
                        <select name="active" value={data.active?"1":"0"} onChange={getInputData} className='form-control border-primary border-2'>
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button type='submit' className='btn btn-primary w-100'>Update</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
