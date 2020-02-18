import React from 'react';
export default class ListTask extends React.Component{
    render(){
      var elements = this.props.list.map((value,index)=>{
        return (
          <tr key={index}>
                <td className="text-center">{index+1}</td>
                <td>{value.name}</td>
                <td className="text-center"><span className=
                {"badge "+(value.level==='High'
                ?"badge-danger":value.level==='Medium'?
                "badge-primary":"badge-info")}
                >{value.level}</span></td>
                <td>
                  <button type="button" className="mr-1 btn btn-warning">Edit</button>
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