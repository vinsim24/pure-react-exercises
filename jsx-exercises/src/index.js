import React from 'react';
import ReactDOM from 'react-dom';

const MyThing = () => {
  return (
    <div className='book'>
      <div className='title'>
        The Title
    </div>
        <div className='author'>
          The Author
    </div>
        <ul className='stats'>
          <li className='rating'>
            5 stars
    </li>
          <li className='isbn'>
            12-345678-910
    </li>
      </ul>
    </div>
    
  );
}

const SpaceTest = () => {
  return (
    <React.Fragment>
      <div>
        Newline
        Test
      </div>
      <div>
        Empty

        Newlines

        Here
      </div>
      <div>
        &nbsp;Non-breaking
        &nbsp;Spaces&nbsp;
      </div>
      <div>
        Line1
        {' '}
        Line2
      </div>
    </React.Fragment>
    
  );
}

function Greeting() {
  // Try all of these variations:
  //let username = "root";
  //let username = undefined;
  //let username = null;
  let username = false;

  let finalMsg = 'Hello ' + username;
  // Fill in the rest:
  return (
    <div>
      {username ? finalMsg : 'Not Logged in'}
    </div>
  );
};

const TestComponent = () => {
  return (
    <div>"Lower name testComponent"
    {
      //alert('1')
    }
    </div>
  );
}

const Table = () => {
  return (
    <table border="1">
      <tbody>
        <tr>
         <Data/>
        </tr>
      </tbody>
    </table>
  );
}

const Data = () => {
  return (
    <React.Fragment>
          <td>Column 1</td>
          <td>Column 2</td>
          <td>Column 3</td>
    </React.Fragment>
  );
}
const Testing = () => {
  return(
    <React.Fragment>
    <MyThing />
    <SpaceTest />
    <Greeting />
      <TestComponent/>
      <Table/>
    </React.Fragment>
  );
}


ReactDOM.render(<Testing/>, document.getElementById("root"));