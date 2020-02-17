import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './assets/style.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
function App() {
   const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="container">
      <div className="page-header">
        <h1>Project 01 - ToDo List <small>ReactJs</small></h1>
        <hr className="my-4"/>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className="dropdown-item" href="#">Name ASC</DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">Name DESC</DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem className="dropdown-item" href="#">Level ASC</DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">Level DESC</DropdownItem>
                  </DropdownMenu>
                  <span className="badge badge-success badge-medium">NAME - DESC</span>
                </Dropdown>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-append">
                  <button className="btn btn-info" type="button">Clear!</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group add-task">
            <button type="button" className="btn btn-info btn-block">Add Task</button>
          </div>
          <form action="" method="POST" className="form-inline justify-content-between">
            <div className="form-group">
              <label className="sr-only" for="">label</label>
              <input type="text" className="form-control" placeholder="Task Name" />
            </div>
            <div className="form-group">
              <label className="sr-only" for="">label</label>
              <select name="ds" className="form-control" required="required">
                <option value="0">Small</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
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
      </div>
    </div>
  );
}

export default App;
