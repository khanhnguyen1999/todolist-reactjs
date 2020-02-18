import React from 'react';
export default class ListTask extends React.Component{

  render(){
      var {list}=this.props;
      var check = function checking(level){
        console.log(level);
        if(level==='High')
        {
          return <td className="text-center"><span className="badge badge-danger">{level}</span></td>
        }
        if(level==='Medium')
        {
          return <td className="text-center"><span className="badge badge-info">{level}</span></td>
        }
        return <td className="text-center"><span className="badge badge-primary">{level}</span></td>
      }
      var elements = list.map((value,index)=>{
        console.log(value.name);
        // checking(value.level);
        return (
          <tr key={index}>
              <td className="text-center">{index}</td>
              <td>{value.name}</td>
              {()=>this.check(value.level)}
              <td>
                <button type="button" className="mr-1 btn btn-info">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
        )
      })
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
            {elements}
          </tbody>
        </table>
    )
}
}