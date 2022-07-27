import React, { useEffect, useState } from 'react'

import axios from "axios";
import { Link } from 'react-router-dom'

function Cars() {
    const [cars, setcars] = useState([])


    useEffect(() => {
        // Making  a async fetchdata function in which we do these things
        async function fetchData() {
            // Storing a data by fetching it from backend api.
            const data = await (await axios.get('/api/car/getallcars')).data
            // Updating the car state with the data.
            setcars(data);
        }
        fetchData();
    }, [])
    

    async function addtocart(car) {
        const orderid = {
            id:localStorage.getItem('orderid')
            ,car
        }

        
        try {
        const result = await (await axios.post('/api/order/addtocart',orderid)).data
        localStorage.setItem('temp',JSON.stringify(result));

        
        } catch (error) {
        console.log(error)
        }
    }

    return (
        <div>


            {cars && (cars.map(car => {
                return <>
                    <div className="row m-2 my-2 bs">
                        <div className="col-md-4">
                            <img src={car.imageurls[0]} alt="something" className="smallimg" />
                        </div>
                        <div className="col-md-7">

                            <h1>{car.name}</h1>
                            <p>Seats : {car.seat} </p>
                            <p>Doors : {car.door} </p>
                            <p>Milage : {car.milage} </p>
                            <p>Rent : $ {car.rentperday} </p>


                            <div style={{ float: "right" }}>

                                <Link to={`/addones`}>
                                    <button className="btn btn-primary m-2" onClick={()=>{addtocart(car._id)}} >Pay now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }))}

        </div>
    )
}

export default Cars