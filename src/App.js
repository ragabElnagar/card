import React,{Component} from "react";
import Coursform from "./corses/corseform";
import Courslist from "./corses/corselist";
class App extends Component {
  state={
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JS"}
    ],
    current:""
  }
updatecourse=(e)=>{
this.setState({
  current:e.target.value
})
}

addcourse=(e)=>{
  e.preventDefault();
  if(this.state.current===""){
    return false
  }
  else{
let current=this.state.current;
let courses=this.state.courses;
courses.push({name:current});
this.setState({courses:courses,
current:""
})
}}
deleteitems=(index)=>{
let courses=this.state.courses;
courses.splice (index ,1);
this.setState({
  courses:courses
})
}

editecourse=(index,value)=>{
  let courses=this.state.courses;
  let course=courses[index];
  course["name"]=value;
  this.setState({
    courses 
  })

}


  render(){
    const {courses}=this.state;
    let length=courses.length;
    const thecourses=length ?(courses.map((courses,index)=>{
      return<Courslist det={courses} key={index} index={index} del={this.deleteitems} edit={this.editecourse}/>
    })):(
      <p>There Is No Items Too Show</p>
    )
    return (
      <div className="App">
        <h2>Add Courses</h2>
        <ul>{thecourses}</ul>
        <Coursform update={this.updatecourse} add={this.addcourse} curent={this.state.current}/>
      </div>
    );
  }
  }
  export default App;
  