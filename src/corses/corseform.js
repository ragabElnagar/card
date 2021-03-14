import React,{Component} from "react";
const Coursform=(props)=>{
    return(
        <form onSubmit={props.add}>
            <input type="text" onChange={props.update} value={props.curent}/> 
            <button type="submit">Add Cuorse</button>
        </form>
    )
}
export default Coursform