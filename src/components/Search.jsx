import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [data, setdata] = useState(
        {
            "consumerno": ""
        }
    )
    const [result, setresult] = useState(
        []
    )
    const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setresult(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)
            }
        ).finally()
    }
    return (
        <div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">consumerno</label>
                                    <input type="text" className="form-control" name='consumerno' value={data.consumerno} onChange={inputhandler} />
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readvalue}>search</button>
                                </div>
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">consumerno</th>
                                                    <th scope="col">billno</th>
                                                    <th scope="col">userid</th>
                                                    <th scope="col">email</th>
                                                    <th scope="col">phoneno</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    result.map(
                                                        (value, index) => {
                                                            return <tr>
                                                                <th scope="row">{value.consumerno}</th>
                                                                <th scope="row">{value.billno}</th>
                                                                <th scope="row">{value.userid}</th>
                                                                <th scope="row">{value.email}</th>
                                                                <th scope="row">{value.phoneno}</th>
                                                            

                                                                <th scope="row"><button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>delete</button></th>

                                                            </tr>
                                                        })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search