import React, { Fragment } from "react";

class EmployeeList extends React.Component{
     constructor(props){
        super(props)

        this.state={
            employees:[
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
            ]
        }
     }

    render(){
        return(
            <Fragment>
            <pre>{JSON.stringify(this.state.employees)}</pre>
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
                                    this.state.employees.map((employee)=>{
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
}

export default EmployeeList;