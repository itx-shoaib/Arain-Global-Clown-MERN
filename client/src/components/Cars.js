import React from 'react'
import { Link } from 'react-router-dom'

function Cars() {
    return (
        <div>
            <div className="row p-3 m-2 bs">
                <div className="col-md-4">
                    <img src='' alt="something" className="smallimg" />
                </div>
                <div className="col-md-7">
                    <h1>Car Name</h1>
                    <b>
                        <p>Max Count : </p>
                        <p>Phone Number : </p>
                        <p>Type : </p>
                    </b>

                    <div style={{ float: "right" }}>

                        <Link to='/addones'>
                        <button className="btn btn-primary m-2">Pay now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cars