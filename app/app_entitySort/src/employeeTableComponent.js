
import React from 'react';

export function EmployeeTableComponent({
    employees,
    handleDelete,
    handleSortSalaryDesc,
    handleSortSalaryAsc }) {
    return (
        <>
            <div className="row splitter">
                <div className="col-lg-12">
                    <h3>Employees:</h3>
                    <p className="lead">Add new employees to the table, sort using the column controls</p>
                    <div className="table-responsive">
                        <table className="table" id="employeeTable">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Name</th>
                                    <th>
                                        <span className="mr-2">Salary</span>
                                        <button id="sortAsc" className="btn btn-sm btn-dark mr-1 px-0" type="button" onClick={handleSortSalaryAsc}><i className="fa fa-fw fa-sort-amount-asc"></i></button>
                                        <button id="sortDesc" className="btn btn-sm btn-dark px-0" type="button" onClick={handleSortSalaryDesc}><i className="fa fa-fw fa-sort-amount-desc"></i></button>
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => {
                                    return (
                                        <tr key={employee.key} id={employee.key}>
                                            <td>{employee.name}</td>
                                            <td>{employee.displaySalary}</td>
                                            <td><a href="#" className="badge badge-danger delete" data-index={index} onClick={handleDelete}>Delete</a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}