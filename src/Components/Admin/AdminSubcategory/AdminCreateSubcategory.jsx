import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {getSubcategory, createSubcategory} from "../../../Redux/Actioncreators/SubcategoryActionCreators"
import formValidator from '../../FormValidators/formValidator'

export default function AdminCreateSubcategory() {
  let [allData, setAllData] = useState([])
  let [data,setData] = useState({
    name: "",
    active: true, 
  })

  let [errorMessage,setErrorMessage] = useState({
    name: "Name is Mandatory"
  })

  let [show,setShow] = useState(false)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector(state=>state.SubcategoryStateData)

  function getInputData(e){
    var {name,value} = e.target
    if(name!=="active"){
      setErrorMessage((old)=>{
        return{
          ...old,
          [name]:formValidator(e)
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
      let item = allData.find((x)=> x.name?.toLocaleLowerCase() === data.name.toLocaleLowerCase())
      if(item){
        setShow(true)
        setErrorMessage((old)=>{
          return{
            ...old,
            "name":"Subcategory Name is  Already Exist"
          }
        })
      }
      else{
        dispatch(createSubcategory({...data})) 
          navigate("/admin/subcategory")
      }
    }
  }
  useEffect(() => {
    ( () => {
      dispatch(getSubcategory())
      if(SubcategoryStateData.length)
        setAllData(SubcategoryStateData)
      else
        setAllData([])
    })()  
  }, [SubcategoryStateData.length])
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-2 col-md-3">
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-md-9">
                <h5 className='bg-primary text-center text-light p-2'>Subcategory <Link to="/admin/subcategory"><i className='fa fa-arrow-left text-light float-end'></i> </Link></h5>
                <form onSubmit={postData}>
                  <div className="row">
                    <div className="col-md-6 mt-1">
                      <label>Name*</label>
                      <input type="text" name="name" onChange={getInputData} placeholder="Subcategory Name" className={`form-control ${show && errorMessage.name?"border-danger":"border-primary"} border-2`} />
                      {show && errorMessage.name?<p className='text-danger text-capitalize'>{errorMessage.name}</p>:""}
                    </div>
                    <div className="col-md-6 mt-1">
                      <label>Active*</label>
                      <select name="active" onChange={getInputData} className='form-control border-primary border-2'>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <button type='submit' className='btn btn-primary w-100'>Create</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
