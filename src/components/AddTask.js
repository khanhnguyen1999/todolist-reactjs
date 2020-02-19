import React,{Component} from 'react';
class AddTask extends Component{
    constructor (props)
    {
        super(props);
        this.state={
            isSwitch:false,
            // addElements:[{name:'',level:''}]
        }
    }
    render(){
        // check(e)=>{
        //     e.preventDefault();
        //     const addElements = [...this.props.list];
        //     addElements.push({
        //         name:this.state.name,
        //         level:this.state.level
        //     })    
        //     console.log(this.props.list.name);
        //     // console.log(this.state.addElements.name);
        //     this.setState({
        //         list:addElements
        //     })
        // };
        return(
            <div className="col-12 col-lg-6">
                <div className="form-group add-task">
                    <button type="button" className={this.state.isSwitch?"btn btn-block btn-primary":"btn btn-block btn-info"}
                        onClick={()=>this.setState({isSwitch:!this.state.isSwitch})}
                    >{this.state.isSwitch?'Close Form':'Add Task'}</button>
                </div>
                <form onSubmit={this.method} style={this.state.isSwitch?{opacity:'1'}:{opacity:'0'}} action="" method="POST" className="form-inline justify-content-between">
                    <div className="form-group">
                    <label className="sr-only" for="">label</label>
                    <input onChange={this.method} name="name" type="text" className="form-control" placeholder="Task Name" />
                    </div>
                    <div className="form-group">
                    <label className="sr-only" for="">label</label>
                    <select onChange={this.method} name="level" className="form-control" required="required">
                        <option value="0">Small</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                    </select>
                    </div>
                    <button onSubmit={this.method} className="btn btn-primary">Submit</button>
                    <button type="button" onClick={()=>this.setState({isSwitch:false})} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
        )
        }
}
export default AddTask;