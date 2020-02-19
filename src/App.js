import React from 'react';
import './assets/style.css';
import SearchTask from './components/SearchTask';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import {remove} from 'lodash';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isList : [
        {
          id:Math.ceil(Math.random()*1000),
          name:'khanh',
          level:'High'
        },
        {
          id:Math.ceil(Math.random()*1000),
          name:'duy',
          level:'Medium'
        },
        {
          id:Math.ceil(Math.random()*1000),
          name:'duy',
          level:'Small'
        }
      ]
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id)
  {
    // console.log(this.props.isList);
      let items = this.state.isList;
      console.log(items);
      // debugger;
      remove(items,(item)=>{
        return item.id===id; 
      });
      this.setState({
        items:items
      })
  }
  render(){
  return (
    <div className="container">
      <div className="page-header">
        <h1>Project 01 - ToDo List <small>ReactJs</small></h1>
        <hr className="my-4"/>
      </div>
      <div className="row">
        <SearchTask/>
        <AddTask list = {this.state.isList}/>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <ListTask onClickDelete ={this.handleDelete} list = {this.state.isList}/>
      </div>
    </div>
  );
}
}
export default App;
