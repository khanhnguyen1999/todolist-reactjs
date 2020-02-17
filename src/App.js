import React from 'react';
import './assets/style.css';
import SearchTask from './components/SearchTask';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
function App() {

  return (
    <div className="container">
      <div className="page-header">
        <h1>Project 01 - ToDo List <small>ReactJs</small></h1>
        <hr className="my-4"/>
      </div>
      <div className="row">
        <SearchTask/>
        <AddTask/>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <ListTask/>
      </div>
    </div>
  );
}

export default App;
