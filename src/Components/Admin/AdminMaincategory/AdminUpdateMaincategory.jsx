import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {getMaincategory, updateMaincategory} from "../../../Redux/Actioncreators/MaincategoryActionCreators"
import formValidator from '../../FormValidators/formValidator'

export default function AdminUpdateMaincategory() {
  let [allData, setAllData] = useState([]) 
  let [data,setData] = useState({
    name: "",
    active: true, 
  })

  let [errorMessage,setErrorMessage] = useState({
    name: ""
  })

  let [show,setShow] = useState(false)
  let navigate = useNavigate()
  let {id} = useParams()
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state=>state.MaincategoryStateData)

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
      let item = allData.find((x)=> x.name?.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id!==id)
      if(item){
        setShow(true)
        setErrorMessage((old)=>{
          return{
            ...old,
            "name":"Maincategory Name is  Already Exist"
          }
        })
      }
      else{
        dispatch(updateMaincategory({ id:id,...data }))
          navigate("/admin/maincategory")
      }
    }
  }
  useEffect(() => {
    ( () => {
      dispatch(getMaincategory())
      if(MaincategoryStateData.length){
        setAllData(MaincategoryStateData)
        setData(MaincategoryStateData.find((x)=>x.id===id))
      }
      else
        setAllData([])
    })()  
  }, [MaincategoryStateData.length])
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-2 col-md-3">
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-md-9">
                <h5 className='bg-primary text-center text-light p-2'>Maincategory <Link to="/admin/maincategory"><i className='fa fa-arrow-left text-light float-end'></i> </Link></h5>
                <form onSubmit={postData}>
                  <div className="row">
                    <div className="col-md-6 mt-1">
                      <label>Name*</label>
                      <input type="text" name="name" value={data.name} onChange={getInputData} placeholder="Maincategory Name" className={`form-control ${show && errorMessage.name?"border-danger":"border-primary"} border-2`} />
                      {show && errorMessage.name?<p className='text-danger text-capitalize'>{errorMessage.name}</p>:""}
                    </div>
                    <div className="col-md-6 mt-1">
                      <label>Active*</label>
                      <select name="active" value={data.active?"1":"0"} onChange={getInputData} className='form-control border-primary border-2'>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
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
