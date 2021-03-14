import React,{Component,Fragment} from "react";
class Courslist extends Component {
    state={
        isedite:false
    }
rendercourse=()=>{
    return(
        <li> 
        <span>{this.props.det.name}</span>
        <button onClick={()=>{this.toggole()}}>update items</button>
    
    <button onClick={()=>{this.props.del(this.props.index)}}>delete items</button>
    </li>
    )
}
updte=(e)=>{
    e.preventDefault();
    this.props.edit(this.props.index,this.input.value)
    this.toggole();
}
renderupdate=()=>{
    return(
        <form onSubmit={this.updte}>
            <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.det.name}/>
            <button>update Course</button>
        </form>
    )
}
toggole=()=>{
    let {isedite}=this.state;
    this.setState({
        isedite:!isedite
    })
}


    render(){
        let {isedite}=this.state
        return(<Fragment>
            {isedite ? this.renderupdate() : this.rendercourse()}
            
        </Fragment>)
    }
}
export default Courslist