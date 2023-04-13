import React, { Fragment, useState } from "react";

let Employee_List_Hooks =()=>{

    let [employees,setEmployees]=useState([
        {
            id:101,
            name:"priyanka",
            age:23,
            designation:"Software Engineer"
        },
        {
            id:102,
            name:"Vaishnavi",
            age:20,
            designation:"Accountant"
        }

    ])


    return(
        <Fragment>
          <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3"> Employee Information</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((employee)=>{
                                        return(
                                            <tr>
                                                <td>{employee.id}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.age}</td>
                                                <td>{employee.designation}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    
        </Fragment>
    )

}

export default Employee_List_Hooks