import React, { useState, useEffect } from 'react'
import axios from "axios";
import moment from 'moment';
import { useParams, Link } from "react-router-dom";

const Additional = ({ match }) => {
    const [addon, setaddon] = useState();
    const [additional, setadditional] = useState();
    const orderid = localStorage.getItem('orderid');
    // For Addon
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get('/api/addon/getallinformation')).data
                setaddon(data);

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    async function add(id) {

        const info = {orderid,id}

        try {
            const data = await (await axios.post('/api/order/addtocartdetail',info)).data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        // try {

        //     const data = await (await axios.get(`/api/addon/addaddon/`)).data
        //     setadditional(data);
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <div>
            {addon && (addon.map(addon => {
                return <>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{addon.title}</h5>
                            <p className="card-text">{addon.description}</p>
                            <Link to={`/addones/${addon._id}`}>
                                <button className="btn btn-primary" onClick={()=>{add(addon._id)}} >Add</button>
                            </Link>
                        </div>
                    </div>
                </>
            }))}
        </div>
    )
}

export default Additional