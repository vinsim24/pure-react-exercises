import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

/*function HelloWorld(){
  return(
    <div>Hello World</div>
  );
}*/

/*const HelloWorld=() => {
  return (
    <div>Hello World</div>
  );
}*/

/*function HelloWorld(){
  //return React.createElement("div", {}, "Hello World")
  return React.createElement('div', {},
    React.createElement('div', {}, 'Child1'),
    React.createElement('div', {}, 'Child2',
      React.createElement('div', {}, 'Child2_child')
    )
  );
}*/

const Hello = () => {
  return(
    <span>Hello</span>
  );
}

const World = () => {
  return (
    <span>World!</span>
  );
}

const HelloWorld = () => {
   return( 
     <div>
       <Hello /> <World />
     </div>
   )
  //return [<Hello key="1"/>, <World key="2"/>];

}

const NameCells=()=>{
  return(
      <Fragment>
        <td>First Name</td>
        <td>Last Name</td>
      </Fragment>
  );
}

ReactDOM.render(<HelloWorld/>,document.getElementById("root"));