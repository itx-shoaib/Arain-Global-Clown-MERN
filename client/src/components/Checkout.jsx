import React, { useState, useRef  } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

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
    let num = 0
    for (let i = 0; i < order.length; i++) {
        let title = order[i].title
        if (title === "ADDITIONAL DRIVER 2") {
            num = num + i;
        }
    }
    const [addon1, setaddon1] = useState(order[num].title === "ADDITIONAL DRIVER 1" ? true : 'NO' );
    const [addon2, setaddon2] = useState(order[num].title === "ADDITIONAL DRIVER 2" ? true : 'NO' );
    const [addon3, setaddon3] = useState(order[num].title === "POST TRIP CLEANING" ? true : 'NO' );
    const [addon4, setaddon4] = useState(order[num].title === "PREPAID REFUEL" ? true : 'NO' );
    // if (addon1 === true || addon2 === true || addon3 === true || addon4 === true) {
    //     setaddon1("ADDITIONAL DRIVER 1");
    //     setaddon2("ADDITIONAL DRIVER 2");
    //     setaddon3("POST TRIP CLEANING");
    //     setaddon4("PREPAID REFUEL");
    // }
    
    
    // for (let i = 0; i < order.length; i++) {
    //     let title = order[i].title
    //     if (title === "ADDITIONAL DRIVER 2") {
    //         localStorage.setItem('driver1',JSON.stringify(title))
    //     }
    // }
    // const driver1 = JSON.parse(localStorage.getItem('driver1'))
    // setdriver1(driver1)
    // setdriver1(driver)
    // if("ADDITIONAL DRIVER 1" in order.title){
    //     setdriver1(order.title)
    // }

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
            carname,
            addon1,
            addon2,
            addon3,
            addon4
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
        // localStorage.clear();
        // window.location.href = "/"

        // await emailjs.sendForm('service_bq8waof', 'template_i8mzosj', e.target, '_BBaQSHFOeRkdSaJc')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });

    }
    const form = useRef();
    const sendEmail = (e)=>{
        emailjs.sendForm('service_bq8waof', 'template_i8mzosj', form.current,'_BBaQSHFOeRkdSaJc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    // function sendEmail(e) {
    //     emailjs.sendForm('service_bq8waof', 'template_i8mzosj', form.current,'_BBaQSHFOeRkdSaJc')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // }


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
                    <form ref={form} onSubmit={sendEmail} className='container'>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" name='firstname' value={firstname} onChange={(e) => { setfirstname(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" name='lastname' value={lastname} onChange={(e) => { setlastname(e.target.value) }} />
                        </div>
                        <h6>Country / Region US</h6>
                        <div className="form-group">
                            <label htmlFor="streetaddress">Street Address</label>
                            <input type="text" className="form-control" id="streetaddress" name='streetaddress' value={address} onChange={(e) => { setaddress(e.target.value) }} />
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
                            <input type="email" className="form-control" id="email" name='email' value={email} onChange={(e) => { setemail(e.target.value) }} />
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
                       {/* { addon1 === true && <>
                                                    <h5>Addon Detail:</h5>
                            <div className="form-group">
                                <label htmlFor="driver1">Driver name:</label>
                                <input type="text" className="form-control" id="driver1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="driver1num">Driver number:</label>
                                <input type="tel" className="form-control" id="driver1num" />
                            </div>
                        </>} */}
                        {addon1 === true ? (<>
                            <h5>Additional Driver 1 Detail:</h5>
                            <div className="form-group">
                                <label htmlFor="driver1">Driver name:</label>
                                <input type="text" className="form-control" id="driver1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="driver1num">Driver number:</label>
                                <input type="tel" className="form-control" id="driver1num" />
                            </div>

                        </>) 
                        : addon2 === true ? (<>
                        <h5>Additional driver 2 Detail:</h5>
                            <div className="form-group">
                                <label htmlFor="driver2">Driver name:</label>
                                <input type="text" className="form-control" id="driver2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="driver2num">Driver number:</label>
                                <input type="tel" className="form-control" id="driver2num" />
                            </div>
                        </>) : addon3 === true ?  (<>
                            <h5>Post Trip Cleaning Detail:</h5>
                            <div className="form-group">
                                <input type="text" className="form-control" id="cleaning" value={addon3} />
                            </div>
                        </>):addon4 === true ?(<>
                            <h5>Prepaid Refuel Detail:</h5>
                            <div className="form-group">
                                <input type="text" className="form-control" id="cleaning" />
                            </div>
                        </>) :(<></>)}


                        <button className="btn btn-primary" onClick={submit}>Place Order</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Checkout