import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {

    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }

     useEffect(
        ()=>{
            fetchData()
        },[]
     )
  return (
    <div>

<div className="container">
    <NavBar/>
    <h1><center>VIEW CARS</center></h1>
    
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Registration_number</th>
      <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Vehicle_type</th>
      <th scope="col">Fuel_type</th>
      <th scope="col">Transmission</th>
      <th scope="col">Seating_capacity</th>
      <th scope="col">Rent_per_day</th>
      <th scope="col">City</th>
      <th scope="col">Availability_status</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
        return(
             <tr>
      
      <td>{value.registration_number}</td>
      <td>{value.brand}</td>
      <td>{value.model}</td>
      <td>{value.vehicle_type}</td>
      <td>{value.fuel_type}</td>
      <td>{value.transmission}</td>
      <td>{value.seating_capacity}</td>
      <td>{value.rent_per_day}</td>
      <td>{value.city}</td>
      <td>{value.availability_status}</td>
      
    </tr>
        )
    }
   )

   }
    
    
  </tbody>
</table>
        </div>
    </div>
</div>

    </div>
  )
}

export default View