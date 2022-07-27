import React, { useState, useEffect } from 'react'
import axios from "axios";
import moment from 'moment';
import { useParams, Link } from "react-router-dom";
import Additional from './Additional';

function Addone({ match }) {
    const [cars, setcars] = useState();
    const [addon, setaddon] = useState();
    const temp = JSON.parse(localStorage.getItem('temp'));
    const name = temp.name;
    const rentperday = temp.rentperday
    // saving dates from localstorage in variable.
    const fromdate = localStorage.getItem('fromdate');
    const todate = localStorage.getItem('todate');
    const todates = moment(todate, 'DD-MM-YYYY')
    const fromdates = moment(fromdate, 'DD-MM-YYYY')
    const totaldays = moment.duration(todates.diff(fromdates)).asDays()
    const totalamount = rentperday * totaldays;
    const amount = Math.round(totalamount)
    const grandtotal = amount + 29 + 31
    const additional = JSON.stringify(localStorage.getItem('additional'))
    localStorage.setItem('totaldays', totaldays)
    localStorage.setItem('grandtotal', grandtotal)

    async function bookCar() {
        const bookingDetail = {
            cars: cars,
            carid: cars,
            fromdate: JSON.stringify(fromdate),
            todate: JSON.stringify(todate),
            totalamount: JSON.parse(localStorage.getItem('grandtotal')),
            totaldays: JSON.parse(localStorage.getItem('totaldays'))
        }

        try {
            const result = await axios.post('/api/booking/bookcar', bookingDetail)
            // setbooking(result._id)
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }
    
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const data = (await axios.get(`/api/car/getcarbyid`)).data
                
    //             setcars(data);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData();
    // }, []);

    

    return (
        <div>
            <div className="container">
                <h1>Vehicle Add Ones</h1>
                <div className="row">
                    <div className="col-md-6">

                        <Additional/>

                    </div>
                    <div className="col-md-5">

                        <div className="card mb-4" style={{ width: '18rem' }}>
                            <img src='' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <h6>Rate:</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">QTY</th>
                                            <th scope="col">RATE</th>
                                            <th scope="col">SUB TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{totaldays} Days</td>
                                            <td>$94</td>
                                            <td>${amount}</td>
                                        </tr>
                                        <tr>
                                            <td>Rental charges rate</td>
                                            <td></td>
                                            <th> ${rentperday}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <h6>Add Ones:</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">QTY</th>
                                            <th scope="col">RATE</th>
                                            <th scope="col">SUB TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 * {additional}</td>
                                            <td>$15</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>Add-ons Charges Rate</td>
                                            <td></td>
                                            <th>$188</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <h6>Taxes & Fees:</h6>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Tax</td>
                                            <td></td>
                                            <td>$29</td>
                                        </tr>
                                        <tr>
                                            <td>Admin Fee</td>
                                            <td></td>
                                            <td>$31</td>
                                        </tr>
                                        <tr>
                                            <td>Pickup Charges</td>
                                            <td></td>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <div>
                                    <p><b>Estimated Total : ${grandtotal}</b></p>
                                </div>
                                <Link to={`/checkout/${temp.car}/${name}`}>
                                    <button className="btn btn-primary" onClick={bookCar}>Continue</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addone