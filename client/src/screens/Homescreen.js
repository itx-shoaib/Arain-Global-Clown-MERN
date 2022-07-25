import { DatePicker } from 'antd';
import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

function Homescreen() {
  const [formdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  function filterByDate(dates) {
    setfromdate(moment(dates[0].format('DD-MM-YYYY'))._i)
    settodate(moment(dates[1].format('DD-MM-YYYY'))._i)
  }
  localStorage.setItem('fromdate',formdate)
  localStorage.setItem('todate',todate)

  async function takeorderdate() {
      const dates = {
        formdate: formdate,
        todate: todate
      }


      try {
        const data = await (await axios.post('/api/order/takeorderdate',dates)).data
        localStorage.setItem('orderid',data);
        
      } catch (error) {
        console.log(error)
      }

  }

  return (
    <div>
      <div className="conatiner">
        <h1 className='my-5'>Rent a car</h1>
        <div className="row">
          <div className="col-md-10 mx-5 border shadow">

            <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />

            <div>
              {formdate && todate && (<Link to='/reservation'>
                <button className="btn my-4 btn-lg btn-primary" onClick={takeorderdate}>Continue reservation</button>
              </Link>)}
              
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Homescreen
