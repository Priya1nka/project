import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios'

let UserList=()=>{

    let [users,setUsers]=useState([])

    useEffect(()=>{
       Axios.get("http://localhost:3333/users").then((response)=>{
           setUsers(response.data)
       }).catch((err)=>{
         console.error(err)
       })
    },[])

    return(
        <Fragment>
            <pre>{JSON.stringify(users)}</pre>
            <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                
                                {
                                    users.map((user)=>{
                                        return(
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.address}</td>
                                            </tr>
                                        )
                                    })
                            
                                
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </Fragment>
    )
}
export default UserList;