import React from 'react'
import Cars from '../components/Cars'


function Reservationscreen() {
    // saving dates from localstorage in variable.
    const fromdate = localStorage.getItem('fromdate');
    const todate = localStorage.getItem('todate');
    return (
        <>
            <div className="container">
                <h2 className='my-5'>Reservation</h2>
                <div className="row my-5">
                    <div className="col-md-4 border">
                        <h4>Your itinerary</h4>
                        <p>Pickup date : {fromdate}</p>
                        <p>Drop off : {todate}</p>
                    </div>
                    <div className="col-md-4 border">
                        <h4>Select vehicle/Add-ones</h4>
                        <p>Type: Bmw</p>
                        <br />
                        <p>Add ones:</p>
                    </div>
                    <div className="col-md-4 border">
                        <h4>Reserve your vehicle</h4>
                        <p>Your information:</p>
                        <br />
                        <p>Payment Information:</p>
                    </div>

                    <Cars/>


                </div>
            </div>
        </>
    )
}

export default Reservationscreen