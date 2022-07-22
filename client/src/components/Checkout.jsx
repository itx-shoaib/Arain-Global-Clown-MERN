import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Checkout({ match }) {
    const { carid, car } = useParams();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [address, setaddress] = useState();
    const [town, settown] = useState();
    const [state, setstate] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();

    async function submit(e) {
        e.preventDefault();
        const form = {
            firstname,
            lastname,
            address,
            town,
            state,
            phone,
            email,
            car,
            carid
        }

        try {
            const data = await (await axios.post(`/api/booking/checkout/${carid}/${car}`), form).data
            console.log(data)
            setfirstname('')
            setlastname('')
            setaddress('')
            settown('')
            setstate('')
            setphone('')
            setemail('')

        } catch (error) {
            console.log(error)
        }


    }


    return (
        <div className='container'>
            <h1>Checkout</h1>
            <div className="row">

                <div className="col-md-5">

                </div>
                <div className="col-md-5">
                    <h3>Driver Details</h3>
                    <form className='container'>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" value={firstname} onChange={(e) => { setfirstname(e.targer.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" value={lastname} onChange={(e) => { setlastname(e.targer.value) }} />
                        </div>
                        <h6>Country / Region US</h6>
                        <div className="form-group">
                            <label htmlFor="streetaddress">Street Address</label>
                            <input type="text" className="form-control" id="streetaddress" value={address} onChange={(e) => { setaddress(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="town">Town</label>
                            <input type="text" className="form-control" id="town" value={town} onChange={(e) => { settown(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" value={state} onChange={(e) => { setstate(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => { setphone(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="car">Car name</label>
                            <input type="text" className="form-control" id="car" value={car} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="carid">Car id</label>
                            <input type="text" className="form-control" id="carid" value={carid} />
                        </div>
                        <button className="btn btn-primary" onClick={submit}>Place Order</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Checkout