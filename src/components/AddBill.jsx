import axios from 'axios'
import React, { useState } from 'react'

const AddBill = () => {
    const [data, setdata] = useState(
        

            {
                "consumerno":"",
                "billno":"",
                "userid":"",
                "email":"",
                "phoneno":""
            }
    
    )
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add", data).then(
            (response) => {
                console.log(response.data)
            if (response.data.status) {
            alert("added")
        } else {
            alert("error")
        }
    }

        ).catch ().finally()
    }
return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">consumerno</label>
                            <input type="text" className="form-control" name='consumerno' value={data.consumerno} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">billno</label>
                            <input type="text" className="form-control" name='billno' value={data.billno} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">userid</label>
                            <input type="text" className="form-control" name='userid' value={data.userid} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phoneno</label>
                            <input type="text" className="form-control" name='phoneno' value={data.phoneno} onChange={inputhandler}/>
                        </div>
    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default AddBill