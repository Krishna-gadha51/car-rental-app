import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCar = () => {

    const[input,changeInput]=useState(
   {   
    registration_number: "", 
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",  
    seating_capacity: "", 
    rent_per_day: "",
    city: "",
    availability_status: ""

   })


   const inputHandler=(event)=>{

    changeInput({...input,[event.target.name]:event.target.value})

     }

     const readValue=()=>{
        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-car",input).then(
            (response)=>{
                console.log(response.data)

                alert("car added successfully")
            }
        ).catch()


     }




    return (
        <div>
            <NavBar/>

            <div className="container">
                <h1><center>ADD CARS</center></h1>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Registration_number</label>
                                <input type="text" className="form-control" name='registration_number'value={input.registration_number}  onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" className="form-control" name='brand' value={input.brand} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Model</label>
                                <input type="text" className="form-control"  name="model"value={input.model} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">


                                <label htmlFor="" className="form-label">Vehicle_type</label>
                                <select name="vehicle_type" id="" className="form-control" value={input.vehicle_type} onChange={inputHandler}>
                                    <option value="Select">Select</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MUV">MUV</option>
                                    <option value="Luxury">Luxury</option>
                                </select>


                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Fuel_type</label>
                                <select name="fuel_type" id="" className="form-control" value={input.fuel_type} onChange={inputHandler}>
                                    <option value="Select">Select</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="CNG">CNG</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label" >Transmission</label>
                                <select name="transmission" id="" className="form-control" value={input.transmission} onChange={inputHandler}>
                                    <option value="Select">Select</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>

                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Seating_capacity</label>
                                <input type="number" name="seating_capacity"className="form-control" value={input.seating_capacity} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Rent_per_day</label>
                                <input type="number" className="form-control" name='rent_per_day'  value={input.rent_per_day} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">


                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control"  name="city"value={input.city} onChange={inputHandler}/>



                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">


                                <label htmlFor="" className="form-label">Availability_status</label>
                                <select name="availability_status" id="" className="form-control" value={input.availability_status} onChange={inputHandler}>
                                    <option value="Available">Available</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Maintenance">Maintenance</option>

                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Add Car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCar