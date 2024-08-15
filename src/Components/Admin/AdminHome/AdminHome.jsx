import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-2 col-md-3">
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-md-9">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/img/noimage.png" height={445} width="100%" alt="Admin Profile Pic" />
                    </div>
                    <div className="col-md-6">
                        <h5 className='bg-primary text-center text-light p-2'>Admin Home Page</h5>
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Nitin Chauhan</td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>nitin</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>nitinchauhan@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>9878</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
