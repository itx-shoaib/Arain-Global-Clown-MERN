import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Checkout({ match }) {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [address, setaddress] = useState('');
    const [town, settown] = useState('');
    const [state, setstate] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    
    // For Car details
    const temp = JSON.parse(localStorage.getItem('temp'));
    const name = temp.name;
    const rentperday = temp.rentperday
    const orderid = JSON.parse(localStorage.getItem('order'))._id;
    const ordertemp = JSON.parse(localStorage.getItem('order'))
    const order = ordertemp.cartdetail;
    const totaldays = localStorage.getItem('totaldays')
    const totalamount = rentperday * totaldays;
    const amount = Math.round(totalamount)
    const total = localStorage.getItem('total')
    const grandtotal = localStorage.getItem('grandtotal')
    const [days, setdays] = useState(totaldays);
    const [price, setprice] = useState(grandtotal)
    const [id, setid] = useState(orderid)
    const [carname, setcarname] = useState(name)
    
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
            days,
            price,
            id,
            carname
        }

        try {
            const data = await axios.post('/api/booking/checkout', form)
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
                                        <td>$ {rentperday}</td>
                                    </tr>
                                    <tr>
                                        <td>Rental charges rate</td>
                                        <td></td>
                                        <th> $ {amount}</th>
                                    </tr>
                                </tbody>
                            </table>
                            <br />

                            {order.map(orders => {
                                return <>
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
                                                <td>1 * {orders.title} </td>
                                                <td>$ {orders.price}</td>
                                                <td>$ {orders.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Add-ons Charges Rate</td>
                                                <td></td>
                                                <th>$ {total}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            })}

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
                                <p><b>Estimated Total : $ {grandtotal}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <h3>Driver Details</h3>
                    <form className='container'>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" value={firstname} onChange={(e) => { setfirstname(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" value={lastname} onChange={(e) => { setlastname(e.target.value) }} />
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
                            {/* <label htmlFor="days">Total days</label> */}
                            <input type="hidden" className="form-control" id="email" value={days} />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="amount">Grandtotal</label> */}
                            <input type="hidden" className="form-control" id="amount" value={price} />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="id">id</label> */}
                            <input type="hidden" className="form-control" id="id" value={id} />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">name</label> */}
                            <input type="hidden" className="form-control" id="name" value={carname} />
                        </div>
                        {order.length >0 && <> 
                        <h5>Addon Detail:</h5>
                        <div className="form-group">
                            <label htmlFor="driver1">Driver name:</label>
                            <input type="text" className="form-control" id="driver1"  />
                        </div> 

                            </>}


                        <button className="btn btn-primary" onClick={submit}>Place Order</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Checkout