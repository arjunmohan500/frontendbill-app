import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data, changedata] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchdata() },[])
    return (
        <div>

            <div className="container">
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
                                    data.map((value, index) => {
                                        return <tr>
                                            <th scope="row">{value.consumerno}</th>
                                            <td>{value.billno}</td>
                                            <td>{value.userid}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phoneno}</td>
                                        </tr>
                                    }
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll