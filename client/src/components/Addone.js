import React,{useState,useEffect} from 'react'
import axios from "axios";
import moment from 'moment';
import { useParams , Link} from "react-router-dom";

function Addone({match}) {
    const [cars, setcars] = useState();
    const {carid} = useParams();
    // saving dates from localstorage in variable.
    const fromdate = localStorage.getItem('fromdate');
    const todate = localStorage.getItem('todate');
    const todates = moment(todate, 'DD-MM-YYYY')
    const fromdates = moment(fromdate, 'DD-MM-YYYY') 
    const totaldays = moment.duration(todates.diff(fromdates)).asDays()
    const [totalamount , settotalamount] = useState();
    
    
    function bookCar() {
        alert(totalamount);
     
        
    }
    useEffect(() => {
      async function fetchData() {
        try {
            const data = (await axios.get(`/api/car/getcarbyid/${carid}`)).data
            console.log(data)
            setcars(data);
        } catch (error) {
            console.log(error)
        }
      }
      fetchData();
    }, []);
    
    return (
        <div>
            <div className="container">
                <h1>Vehicle Add Ones</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Additional Driver 1</h5>
                                <p class="card-text">15$ will be charged per additional driver</p>
                                <button class="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">

                        {cars && (<div class="card" style={{ width: '18rem' }}>
                            <img src={cars.imageurls[0]} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">car name:{cars.name}</h2>
                                <h6>Rate:</h6>
                                <table class="table">
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
                                            <td>{cars.rentperday}</td>
                                        </tr>
                                        <tr>
                                            <td>Rental charges rate</td>
                                            <td></td>
                                            <th>{cars.rentperday}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <h6>Add Ones:</h6>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">QTY</th>
                                            <th scope="col">RATE</th>
                                            <th scope="col">SUB TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 * Additional driver 1</td>
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
                                <table class="table">
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
                                    <p><b>Estimated Total : ${cars.rentperday}</b></p>
                                </div>
                                {/* <Link to="/checkout"> */}
                                <button class="btn btn-primary" onClick={bookCar}>Continue</button>
                                {/* </Link> */}
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addone