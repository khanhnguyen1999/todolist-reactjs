import React,{Component} from 'react';
class AddTask extends Component{
    constructor (props)
    {
        super(props);
        this.state={
            isSwitch:false,
            isToggle : ['Small','Medium','High'],
            isList:[
                {id:'',name:'',level:''}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    handleChange(event){
        console.log(event.target.name.level);
        this.setState({isList: [
            {
            id:Math.ceil(Math.random()*1000),
            name:event.target.value,
            level:event.target.value
        }]});
        // console.log(this.state.isList.name);
    };
    handleSubmit(event){
        console.log(this.state.isList);
        event.preventDefault();
    }
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
            <form onSubmit={this.handleSubmit} style={this.state.isSwitch?{opacity:'1'}:{opacity:'0'}} action="" method="POST" className="form-inline justify-content-between">
                <div className="form-group">
                <label className="sr-only" for="">label</label>
                <input value={this.state.isList.name} onChange={this.handleChange} name="name" type="text" className="form-control" placeholder="Task Name" />
                </div>
                <div className="form-group">
                <label className="sr-only" for="">label</label>
                <select value={this.state.isList.level} onChange={this.handleChange} name="level" className="form-control" required="required">
                    {elementToggle}
                </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={()=>this.setState({isSwitch:false})} type="button" className="btn btn-secondary">Cancel</button>
            </form>
            </div>
        )
        }
    }
export default AddTask;