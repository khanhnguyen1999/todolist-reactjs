import React from 'react';
export default function ListTask(){
    return(
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{width: "10%"}} className="text-center">#</th>
              <th>Task</th>
              <th style={{width: "20%"}} className="text-center">Level</th>
              <th style={{width: "160px"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
              <td className="text-center"><span className="badge badge-danger">High</span></td>
              <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
              <td className="text-center"><span className="badge badge-secondary">Small</span></td>
              <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
              <td className="text-center"><span className="badge badge-info">Medium</span></td>
              <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    )
}