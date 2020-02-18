import React,{Component} from 'react';
class AddTask extends Component{
    constructor (props)
    {
        super(props);
        this.state={
            isSwitch:false,
            isToggle : ['Small','Medium','High']
        }
    };
    render(){
        var elementToggle = this.state.isToggle.map((value,index)=>{
        return <option key={index}>{value}</option>
        })
        return(
            <div className="col-12 col-lg-6">
            <div className="form-group add-task">
                <button type="button" className={this.state.isSwitch?"btn btn-block btn-primary":"btn btn-block btn-info"}
                    onClick={()=>this.setState({isSwitch:!this.state.isSwitch})}
                >{this.state.isSwitch?'Close Form':'Add Task'}</button>
            </div>
            <form style={this.state.isSwitch?{opacity:'1'}:{opacity:'0'}} action="" method="POST" className="form-inline justify-content-between">
                <div className="form-group">
                <label className="sr-only" for="">label</label>
                <input type="text" className="form-control" placeholder="Task Name" />
                </div>
                <div className="form-group">
                <label className="sr-only" for="">label</label>
                <select name="ds" className="form-control" required="required">
                    {elementToggle}
                </select>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
            </form>
            </div>
        )
        }
    }
export default AddTask;