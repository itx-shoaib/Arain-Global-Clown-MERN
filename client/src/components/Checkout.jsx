import React from 'react'

function Checkout() {
    return (
        <div className='container'>
            <h1>Checkout</h1>
            <div className="row">
                
                <div className="col-md-5">

                </div>
                <div className="col-md-5">
                    <h3>Driver Details</h3>
                    <form className='container'>
                        <div class="form-group">
                            <label for="firstname">First Name</label>
                            <input type="text" class="form-control" id="firstname" />
                        </div>
                        <div class="form-group">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control" id="lastname" />
                        </div>
                        <h6>Country / Region US</h6>
                        <div class="form-group">
                            <label for="streetaddress">Street Address</label>
                            <input type="text" class="form-control" id="streetaddress" />
                        </div>
                        <div class="form-group">
                            <label for="town">Town</label>
                            <input type="text" class="form-control" id="town" />
                        </div>
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" class="form-control" id="state" />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" class="form-control" id="phone" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <button type="submit" class="btn btn-primary">Place Order</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Checkout